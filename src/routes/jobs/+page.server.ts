import type { PageServerLoad } from './$types';
import type { Job } from '$lib/types/job';

// This would typically come from a database
const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Nurse',
    company: 'King Faisal Hospital',
    location: 'Saudi Arabia',
    type: 'international',
    salary: '$3,000 - $4,000 per month',
    description:
      'We are seeking experienced senior nurses to join our prestigious healthcare facility in Saudi Arabia. The ideal candidate will have extensive experience in critical care and emergency medicine.',
    requirements: [
      "Bachelor's degree in Nursing",
      'Minimum 5 years of experience in critical care',
      'Valid nursing license',
      'Strong English communication skills',
      'Experience with electronic health records',
      'Ability to work in a fast-paced environment'
    ],
    postedDate: '2025-03-01',
    deadline: '2025-04-01'
  },
  {
    id: '2',
    title: 'Medical Laboratory Technologist',
    location: 'Kenya',
    type: 'internal',
    description:
      'Join our growing team of medical laboratory professionals. You will be responsible for conducting various laboratory tests and maintaining quality control.',
    requirements: [
      'Diploma in Medical Laboratory Technology',
      'At least 2 years of experience',
      'Knowledge of laboratory safety protocols',
      'Experience with modern lab equipment',
      'Strong attention to detail'
    ],
    postedDate: '2025-03-10'
  },
  {
    id: '3',
    title: 'ICU Nurse',
    company: 'Hamad Medical Corporation',
    location: 'Qatar',
    type: 'international',
    salary: '$4,500 - $5,500 per month',
    description:
      'We are looking for experienced ICU nurses to join our state-of-the-art facility in Qatar. You will be working with the latest medical technology and a diverse team of healthcare professionals.',
    requirements: [
      'BSN with ICU specialization',
      'Minimum 3 years ICU experience',
      'BLS and ACLS certification',
      'Experience with ventilators and critical care equipment',
      'Strong clinical assessment skills',
      'Excellent communication skills'
    ],
    postedDate: '2025-03-05',
    deadline: '2025-04-15'
  }
];

export const load: PageServerLoad = async () => {
  return {
    jobs
  };
};
