/**
 * Formats salary strings to ensure consistent spacing
 * @param salary The salary string to format (e.g., "1000QR" or "150 KD")
 * @returns Formatted salary string with proper spacing
 */
export function formatSalary(salary: string): string {
  // Remove any existing spaces
  const clean = salary.replace(/\s+/g, '');
  
  // Match the numeric part and the currency part
  const match = clean.match(/^(\d+)([A-Za-z]+)$/);
  if (!match) return salary;

  const [, amount, currency] = match;
  
  // Add thousand separators
  const formattedAmount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // Return with proper spacing
  return `${formattedAmount} ${currency}`;
}
