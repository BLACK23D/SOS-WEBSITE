import type { PageServerLoad } from './$types';
import { jobs } from '$lib/data/jobs';

export const load: PageServerLoad = async () => {
  const internationalJobs = jobs.filter(job => job.type === 'international');

  return {
    jobs: internationalJobs
  };
};
