// Simple rate limiting utility
interface RateLimitEntry {
  count: number;
  timestamp: number;
}

class RateLimit {
  private limits: Map<string, RateLimitEntry> = new Map();
  private maxAttempts = 5;
  private windowMs = 60000; // 1 minute

  check(key: string): boolean {
    const now = Date.now();
    const entry = this.limits.get(key);

    if (!entry) {
      this.limits.set(key, { count: 1, timestamp: now });
      return true;
    }

    // Reset if outside window
    if (now - entry.timestamp > this.windowMs) {
      this.limits.set(key, { count: 1, timestamp: now });
      return true;
    }

    // Increment count
    entry.count++;
    this.limits.set(key, entry);

    return entry.count <= this.maxAttempts;
  }

  getRemainingAttempts(key: string): number {
    const entry = this.limits.get(key);
    if (!entry) return this.maxAttempts;

    const now = Date.now();
    if (now - entry.timestamp > this.windowMs) return this.maxAttempts;

    return Math.max(0, this.maxAttempts - entry.count);
  }

  getTimeToReset(key: string): number {
    const entry = this.limits.get(key);
    if (!entry) return 0;

    const now = Date.now();
    const timeElapsed = now - entry.timestamp;
    return Math.max(0, this.windowMs - timeElapsed);
  }
}

export const rateLimit = new RateLimit();
