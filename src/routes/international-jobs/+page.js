import { jobs } from '$lib/data/jobs';

export function load() {
  const internationalJobs = jobs.filter(job => job.type === 'international');

  return {
    jobs: internationalJobs
  };
}
