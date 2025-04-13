import { writable } from 'svelte/store';

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  content: string;
  author?: string;
  tags?: string[];
}

// Mock news data - in production, this would come from an API or database
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Multiple Job Opportunities in Qatar and Kuwait',
    description: 'Various positions available including cleaners, baristas, nurses, receptionists, and more with competitive salaries.',
    date: '2025-04-04',
    category: 'International Jobs',
    imageUrl: '/images/services/international.webp',
    featured: true,
    author: 'SOS Recruitment Team',
    tags: ['Qatar', 'Kuwait', 'Healthcare', 'Hospitality', 'Safety', 'Transportation'],
    content: `
      ## Cleaner Positions - Qatar
      - Salary: 1000 QR
      - Requirements:
        - CV
        - Passport
        - Any other relevant documents

      ## Barista Position - Kuwait
      - Salary: 150 KD
      - Requirements:
        - CV
        - Passport
        - Relevant experience

      ## Nursing Positions - Qatar
      - Salary: QAR 5,700
      - Requirements:
        - Well-aligned resume
        - Diploma/Degree in Nursing
        - Valid Nursing Council Certificate
        - Valid Passport
        - Police Clearance Certificate
        - 2+ Years Experience (Pediatric/Medical-Surgical Unit or Pediatric ICU)

      ## Receptionist - Qatar
      - Salary: 1600 QR
      - Requirements:
        - CV
        - Passport
        - Educational documents
        - Relevant documents

      ## Safety Officers - Qatar
      - Salary: 3000 QR
      - Requirements:
        - Nebosh IGC or equivalent
        - OSHA or equivalent safety certification
        - First Aid and CPR certification
        - Passport
        - Good conduct
        - CV
      - Benefits:
        - Food
        - Transport
        - Accommodation
        - Medical

      ## Car Washers - Qatar
      - Salary: 1200 QR
      - Requirements:
        - Passport
        - CV
        - Good Conduct
      - Benefits:
        - Food
        - Transport
        - Accommodation

      ## Travel Butler - Qatar
      - Salary: 4,500 QR
      - Location: Luxury Palace
      - Requirements:
        - Excellent etiquette & hospitality skills
        - Passport & updated CV
        - Previous experience in luxury service is a plus

      ## Delivery Motorbike Riders - Qatar
      - Salary: 1650 QR
      - Requirements:
        - CV
        - Passport
        - Valid driving license

      ## Heavy Bus Drivers - Qatar
      - Salary: 2200 QR
      - Requirements:
        - Valid Passport
        - Updated CV
        - Valid Driving License (Heavy or Light)/GCC

      ## Light Taxi Drivers - Qatar
      - Salary: 1800 QR
      - Requirements:
        - Valid Passport
        - Updated CV
        - Valid Driving License (Heavy or Light)/GCC

      For all positions, interested candidates should submit their applications through our online portal. Our recruitment team will review all applications and contact qualified candidates for initial interviews.
    `
  },
  {
    id: 2,
    title: 'Tech Industry Growth Creates New Local Opportunities',
    description:
      'Leading tech companies in Kenya are hiring for various roles in software development, data science, and IT infrastructure.',
    date: '2025-03-13',
    category: 'Local Jobs',
    imageUrl: '/images/services/local.webp',
    featured: true,
    author: 'David Mwangi',
    tags: ['Technology', 'Kenya', 'Software', 'Data Science'],
    content: `
      The Kenyan tech industry is experiencing unprecedented growth, creating numerous opportunities for local talent. SOS Recruitment has partnered with leading tech companies to fill various positions.

      ## Current Openings
      - Software Engineers (Frontend, Backend, Full-stack)
      - Data Scientists and Analysts
      - DevOps Engineers
      - IT Security Specialists
      
      ## Industry Trends
      The local tech sector has shown remarkable growth, with:
      - 35% increase in tech jobs year-over-year
      - Rising demand for AI and machine learning expertise
      - Growing focus on cybersecurity
      - Expansion of fintech services
      
      ## Skills in Demand
      - Programming languages (Python, JavaScript, Java)
      - Cloud computing (AWS, Azure)
      - Data analysis and visualization
      - Agile methodologies
      
      ## Career Development
      Companies are offering:
      - Competitive salaries
      - Professional development opportunities
      - Remote work options
      - Health insurance
      - Stock options
      
      Contact us to learn more about these exciting opportunities in Kenya's growing tech sector.
    `
  },
  {
    id: 3,
    title: 'Free Career Development Workshop Series',
    description:
      'Join our comprehensive workshop series covering resume writing, interview skills, and career planning.',
    date: '2025-03-12',
    category: 'Events',
    imageUrl: '/images/services/counseling.webp',
    author: 'Emily Wanjiru',
    tags: ['Career Development', 'Workshop', 'Skills'],
    content: `
      SOS Recruitment is excited to announce our upcoming career development workshop series, designed to help job seekers enhance their professional skills and career prospects.

      ## Workshop Schedule
      
      ### Week 1: Resume Writing Masterclass
      - Date: March 20, 2025
      - Time: 9:00 AM - 12:00 PM
      - Topics:
        - Modern resume formats
        - ATS optimization
        - Personal branding
        - Achievement highlighting
      
      ### Week 2: Interview Excellence
      - Date: March 27, 2025
      - Time: 9:00 AM - 12:00 PM
      - Topics:
        - Common interview questions
        - Body language and presentation
        - Virtual interview tips
        - Follow-up strategies
      
      ### Week 3: Career Planning & Growth
      - Date: April 3, 2025
      - Time: 9:00 AM - 12:00 PM
      - Topics:
        - Goal setting
        - Industry analysis
        - Networking strategies
        - Professional development
      
      ## Registration
      - Workshops are free but registration is required
      - Limited to 30 participants per session
      - Virtual attendance options available
      - Certificate of completion provided
      
      Register now to secure your spot in these valuable career development sessions!
    `
  },
  {
    id: 4,
    title: 'Construction Boom in Qatar Creates Job Opportunities',
    description:
      'Major infrastructure projects in Qatar are creating numerous positions for construction and engineering professionals.',
    date: '2025-03-11',
    category: 'International Jobs',
    imageUrl: '/images/services/international.webp',
    author: 'Mohammed Al-Sayed',
    tags: ['Construction', 'Qatar', 'Engineering'],
    content: `
      Qatar's ongoing infrastructure development is creating exceptional opportunities for construction and engineering professionals. SOS Recruitment is currently recruiting for several major projects.

      ## Available Positions
      - Civil Engineers
      - Project Managers
      - Construction Supervisors
      - Quantity Surveyors
      - HSE Officers
      
      ## Project Types
      - Infrastructure Development
      - Commercial Buildings
      - Residential Complexes
      - Transportation Networks
      
      ## Package Benefits
      - Competitive tax-free salary
      - Accommodation provided
      - Transportation allowance
      - Annual air tickets
      - Medical insurance
      
      ## Requirements
      - Relevant degree and certifications
      - Minimum 5 years experience
      - English proficiency
      - Previous GCC experience preferred
      
      Contact our recruitment team to learn more about these opportunities in Qatar's growing construction sector.
    `
  },
  {
    id: 5,
    title: 'Digital Marketing Skills Workshop',
    description:
      "Learn essential digital marketing skills needed in today's job market with our expert-led workshop.",
    date: '2025-03-10',
    category: 'Events',
    imageUrl: '/images/services/counseling.webp',
    author: 'Lisa Kamau',
    tags: ['Digital Marketing', 'Workshop', 'Skills'],
    content: `
      Join our comprehensive digital marketing workshop designed to equip you with the skills demanded by employers in today's digital age.

      ## Workshop Details
      - Date: March 25, 2025
      - Time: 9:00 AM - 4:00 PM
      - Location: SOS Training Center, Nairobi
      
      ## Topics Covered
      ### Morning Session
      - Social Media Marketing
        - Platform strategies
        - Content creation
        - Analytics and reporting
      
      ### Afternoon Session
      - Search Engine Optimization
        - Keyword research
        - On-page optimization
        - Link building basics
      
      ## What You'll Learn
      - Creating effective digital marketing strategies
      - Understanding analytics and metrics
      - Content marketing best practices
      - Social media campaign management
      - Basic SEO techniques
      
      ## Benefits
      - Hands-on practical exercises
      - Real-world case studies
      - Networking opportunities
      - Certificate of completion
      - Post-workshop support
      
      Limited seats available. Register now to secure your spot!
    `
  },
  {
    id: 6,
    title: 'Hospitality Sector Recovery Creates New Jobs',
    description:
      'The rebounding hospitality sector is creating numerous opportunities in hotels and resorts across East Africa.',
    date: '2025-03-09',
    category: 'Industry News',
    imageUrl: '/images/services/local.webp',
    author: 'James Omondi',
    tags: ['Hospitality', 'Hotels', 'Tourism'],
    content: `
      The hospitality sector in East Africa is showing strong signs of recovery, creating numerous job opportunities across various positions and skill levels.

      ## Industry Analysis
      The sector has seen significant growth with:
      - 40% increase in tourist arrivals
      - New hotel developments
      - Rising demand for skilled professionals
      - Improved industry standards
      
      ## Available Positions
      ### Management Roles
      - Hotel Managers
      - F&B Managers
      - Front Office Managers
      - Housekeeping Supervisors
      
      ### Operational Roles
      - Chefs and Cooks
      - Wait Staff
      - Front Desk Officers
      - Housekeeping Staff
      
      ## Required Skills
      - Customer service excellence
      - Communication skills
      - Industry certifications
      - Language proficiency
      
      ## Growth Opportunities
      - Career advancement paths
      - Professional development
      - International exposure
      - Competitive benefits
      
      Contact SOS Recruitment to learn more about opportunities in the hospitality sector.
    `
  },
  {
    id: 7,
    title: 'Healthcare Professional Recruitment Drive',
    description:
      'Major healthcare facilities in Kenya and the Middle East are seeking qualified medical professionals.',
    date: '2025-03-08',
    category: 'Healthcare',
    imageUrl: '/images/services/counseling.webp',
    author: 'Dr. Sarah Kimani',
    tags: ['Healthcare', 'Medical', 'Nursing', 'International'],
    content: `
      We are currently recruiting for various healthcare positions both locally and internationally. This recruitment drive aims to place qualified medical professionals in leading healthcare facilities.

      ## Available Positions
      ### Nursing Roles
      - ICU/CCU Nurses
      - General Ward Nurses
      - Pediatric Nurses
      - Emergency Room Nurses
      
      ### Medical Specialists
      - Cardiologists
      - Pediatricians
      - General Practitioners
      - Dentists
      
      ### Support Staff
      - Laboratory Technicians
      - Radiographers
      - Pharmacists
      - Medical Records Officers
      
      ## Requirements
      - Valid professional licenses
      - Minimum 2 years experience
      - Strong English communication skills
      - Relevant certifications
      
      ## Benefits
      - Competitive salaries
      - Housing allowance
      - Medical coverage
      - Professional development
      
      Contact our healthcare recruitment specialists to learn more about these opportunities.
    `
  },
  {
    id: 8,
    title: 'Success Stories: From Job Seeker to Career Success',
    description:
      'Read inspiring stories of candidates who found their dream jobs through SOS Recruitment.',
    date: '2025-03-07',
    category: 'Success Stories',
    imageUrl: '/images/services/cv.webp',
    author: 'Jane Njeri',
    tags: ['Success Stories', 'Career Growth', 'Inspiration'],
    content: `
      We are proud to share the success stories of individuals who have transformed their careers through our recruitment services.

      ## Featured Success Stories

      ### From Local Graduate to International Professional
      Mary Wambui, a fresh graduate from the University of Nairobi, secured a position as a Software Developer in Dubai through our international placement program.
      
      ### Career Transition Success
      John Kamau successfully transitioned from a teaching career to a corporate training role, doubling his salary and finding greater job satisfaction.
      
      ### Rising Through the Ranks
      Sarah Omondi started as an entry-level accountant and, through our career development program, is now a Finance Manager at a leading multinational company.
      
      ## Key Success Factors
      - Personalized career guidance
      - Professional development support
      - Strategic job placement
      - Ongoing mentorship
      
      ## Your Success Story Starts Here
      - Professional CV review
      - Interview preparation
      - Career counseling
      - Job market insights
      
      Contact us to start your journey to career success.
    `
  }
];

// Create a writable store with the news items
export const newsStore = writable(newsItems);

// Helper functions
export function getNewsById(id: number): NewsItem | undefined {
  return newsItems.find((item) => item.id === id);
}

export function getLatestNews(count: number = 3): NewsItem[] {
  return [...newsItems]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getFeaturedNews(): NewsItem[] {
  return newsItems.filter((item) => item.featured);
}

export function getNewsByCategory(category: string): NewsItem[] {
  return newsItems.filter((item) => item.category === category);
}

export function searchNews(query: string): NewsItem[] {
  const searchTerm = query.toLowerCase();
  return newsItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.content.toLowerCase().includes(searchTerm) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
}
