import type { PageServerLoad } from './$types';
import type { Job } from '$lib/types/job';
import { formatSalary } from '$lib/utils/format';
export const prerender = false;

// This would typically come from a database
const jobs: Job[] = [
  {
    id: '1',
    title: 'Cleaners',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('1000QR'),
    description: 'Immediate openings for cleaners in Qatar with attractive benefits.',
    requirements: [
      'CV',
      'Passport',
      'Any other relevant documents'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '2',
    title: 'Barista',
    location: 'Kuwait',
    type: 'international',
    salary: formatSalary('150KD'),
    description: 'Urgently hiring baristas for positions in Kuwait.',
    requirements: [
      'CV',
      'Passport',
      'Relevant experience'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '3',
    title: 'Nurses',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('5700QR'),
    description: 'Seeking qualified nurses for medical facilities in Qatar.',
    requirements: [
      'Well-aligned resume',
      'Diploma/Degree in Nursing',
      'Valid Nursing Council Certificate',
      'Valid Passport',
      'Police Clearance Certificate',
      '2+ Years Experience (Pediatric/Medical-Surgical Unit or Pediatric ICU)'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation',
      'Medical'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '4',
    title: 'Receptionist',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('1600QR'),
    description: 'Opening for receptionist position in Qatar.',
    requirements: [
      'CV',
      'Passport',
      'Educational documents',
      'Relevant documents'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '5',
    title: 'Safety Officers',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('3000QR'),
    description: 'Safety officer positions available with comprehensive benefits package.',
    requirements: [
      'Nebosh IGC or equivalent',
      'OSHA or equivalent safety certification',
      'First Aid and CPR certification',
      'Passport',
      'Good conduct',
      'CV'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation',
      'Medical'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '6',
    title: 'Car Washers',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('1200QR'),
    description: 'Immediate openings for car washers with accommodation provided.',
    requirements: [
      'Passport',
      'CV',
      'Good Conduct'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '7',
    title: 'Travel Butler',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('4500QR'),
    description: 'Exclusive opportunity to work as a Travel Butler in a prestigious palace.',
    requirements: [
      'Excellent etiquette & hospitality skills',
      'Passport & updated CV',
      'Previous experience in luxury service is a plus'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '8',
    title: 'Delivery Motorbike Riders',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('1650QR'),
    description: 'Hiring delivery motorbike riders in Qatar.',
    requirements: [
      'CV',
      'Passport',
      'Valid driving license'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '9',
    title: 'Heavy Bus Drivers',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('2200QR'),
    description: 'Join a reputable company in Qatar as a Heavy Bus Driver.',
    requirements: [
      'Valid Passport',
      'Updated CV',
      'Valid Driving License (Heavy or Light)/GCC'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  },
  {
    id: '10',
    title: 'Light Taxi Drivers',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('1800QR'),
    description: 'Opportunities available for Light Taxi Drivers in Qatar.',
    requirements: [
      'Valid Passport',
      'Updated CV',
      'Valid Driving License (Heavy or Light)/GCC'
    ],
    benefits: [
      'Food',
      'Transport',
      'Accommodation'
    ],
    postedDate: '2025-04-04'
  }
];

// Pagination settings
const ITEMS_PER_PAGE = 10;

export const load: PageServerLoad = async ({ url }) => {
  const page = Number(url.searchParams.get('page')) || 1;
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  
  const paginatedJobs = jobs.slice(start, end);
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);

  return {
    jobs: paginatedJobs,
    pagination: {
      currentPage: page,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  };
};
