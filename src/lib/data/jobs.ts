import type { Job, JobLocation } from '$lib/types/job';

function formatSalary(amount: string, location: JobLocation): string {
  const value = amount.replace(/[^0-9]/g, '');
  const currency = location === 'Qatar' ? 'QR' : 'KD';
  return `${value} ${currency}`;
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Cleaners',
    location: 'Qatar',
    type: 'international',
    salary: formatSalary('1000', 'Qatar'),
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
    category: 'hospitality',
    type: 'international',
    salary: formatSalary('150', 'Kuwait'),
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
    category: 'healthcare',
    salary: formatSalary('5700', 'Qatar'),
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
    salary: formatSalary('1600', 'Qatar'),
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
    salary: formatSalary('3000', 'Qatar'),
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
    salary: formatSalary('1200', 'Qatar'),
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
    salary: formatSalary('4500', 'Qatar'),
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
    salary: formatSalary('1650', 'Qatar'),
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
    salary: formatSalary('2200', 'Qatar'),
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
    salary: formatSalary('1800', 'Qatar'),
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
