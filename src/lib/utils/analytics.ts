// Simple analytics utility
type EventType = 'pageview' | 'click' | 'form_submit' | 'job_view' | 'job_apply';

interface AnalyticsEvent {
  type: EventType;
  page: string;
  data?: Record<string, any>;
  timestamp: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private maxEvents = 100;

  constructor() {
    // Load events from localStorage on initialization
    this.loadEvents();
    
    // Save events to localStorage before page unload
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => this.saveEvents());
    }
  }

  track(type: EventType, data?: Record<string, any>) {
    const event: AnalyticsEvent = {
      type,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      data,
      timestamp: Date.now()
    };

    this.events.push(event);
    
    // Keep only the last maxEvents
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }
  }

  private loadEvents() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('site_analytics');
      if (stored) {
        try {
          this.events = JSON.parse(stored);
        } catch (e) {
          console.error('Failed to load analytics:', e);
          this.events = [];
        }
      }
    }
  }

  private saveEvents() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_analytics', JSON.stringify(this.events));
    }
  }

  getEvents() {
    return this.events;
  }
}

export const analytics = new Analytics();
