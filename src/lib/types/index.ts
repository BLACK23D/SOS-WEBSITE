export interface Locals {
  email: {
    user: string;
    password: string;
  };
}

export interface Job {
  id: string;
  title: string;
  company?: string;
  location: string;
  type: 'international' | 'internal';
  salary?: string;
  description: string;
  requirements: string[];
  postedDate: string;
  deadline?: string;
  benefits?: string[];
  department?: string;
}

export interface JobType {
  value: 'international' | 'internal';
  label: string;
}

export interface JobLocation {
  value: string;
  label: string;
  type: 'country' | 'city';
}
