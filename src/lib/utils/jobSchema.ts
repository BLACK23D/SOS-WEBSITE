import type { Job } from '$lib/types/job';

/**
 * Generates JSON-LD schema for job posting
 * @param job The job data
 * @returns JSON-LD schema object
 */
export function generateJobSchema(job: Job) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    datePosted: job.postedDate,
    validThrough: job.deadline || '',
    description: job.description,
    employmentType: job.type === 'international' ? 'FULL_TIME' : 'CONTRACTOR',
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: job.location === 'all' ? 'Multiple' : job.location
      }
    },
    baseSalary: job.salary
      ? {
          '@type': 'MonetaryAmount',
          currency: job.location === 'Qatar' ? 'QAR' : 'KWD',
          value: {
            '@type': 'QuantitativeValue',
            value: job.salary.replace(/[^0-9]/g, ''),
            unitText: 'MONTH'
          }
        }
      : undefined,
    qualifications: job.requirements.join(', '),
    jobBenefits: job.benefits ? job.benefits.join(', ') : undefined,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company || 'SOS Recruitment',
      sameAs: 'https://www.sosrecruitment.com'
    }
  };
}
