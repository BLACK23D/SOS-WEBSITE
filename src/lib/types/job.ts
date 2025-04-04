export type JobType = 'international' | 'local' | 'all';
export type JobLocation = 'Qatar' | 'Kuwait' | 'all';

export interface Job {
  id: string;
  title: string;
  company?: string;
  location: JobLocation;
  type: JobType;
  salary?: string;
  description: string;
  requirements: string[];
  benefits?: string[];
  postedDate: string;
  deadline?: string;
  employer?: string;
  category?: 'healthcare' | 'hospitality' | 'other';
}
