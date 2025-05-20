// Form validation utilities
export const validators = {
  required: (value: string) => (value && value.trim() ? '' : 'This field is required'),
  email: (value: string) => {
    if (!value) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : 'Please enter a valid email address';
  },
  phone: (value: string) => {
    if (!value) return '';
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(value.replace(/[\s\-()]/g, '')) ? '' : 'Please enter a valid phone number';
  },
  minLength: (length: number) => (value: string) => 
    value.length >= length ? '' : `Must be at least ${length} characters`,
  maxLength: (length: number) => (value: string) => 
    value.length <= length ? '' : `Must be no more than ${length} characters`
};

export type ValidationRule = (value: string) => string;

export function validateField(value: string, rules: ValidationRule[]): string {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return '';
}
