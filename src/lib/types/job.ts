export interface Job {
  id: string;
  title: string;
  company?: string;
  location: string;
  type: 'internal' | 'international';
  salary?: string;
  description: string;
  requirements: string[];
  postedDate: string;
  deadline?: string;
}

export type JobType = 'all' | 'internal' | 'international';
export type JobLocation = 'all' | 'kenya' | 'qatar' | 'uae' | 'saudi arabia' | 'bahrain';
