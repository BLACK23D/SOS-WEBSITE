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
    title: 'Expanding Opportunities in the Middle East Healthcare Sector',
    description:
      'New healthcare positions available in UAE and Saudi Arabia with competitive packages for medical professionals.',
    date: '2025-03-14',
    category: 'International Jobs',
    imageUrl: '/images/services/international.webp',
    featured: true,
    author: 'Sarah Johnson',
    tags: ['Healthcare', 'UAE', 'Saudi Arabia', 'Medical'],
    content: `
      SOS Recruitment is proud to announce multiple new opportunities in the healthcare sector across the Middle East region. These positions offer exceptional benefits and career growth potential.

      ## Available Positions
      - Medical Specialists
      - Registered Nurses
      - Healthcare Administrators
      - Medical Laboratory Technologists
      
      ## Key Benefits
      - Competitive tax-free salaries
      - Housing allowance
      - Transportation allowance
      - Annual flight tickets
      - Comprehensive medical insurance
      - Family relocation support
      
      ## Requirements
      - Relevant qualifications and certifications
      - Minimum 3-5 years experience
      - English proficiency
      - Willingness to relocate
      
      ## How to Apply
      Interested candidates should submit their applications through our online portal. Our recruitment team will review all applications and contact qualified candidates for initial interviews.

      Don't miss this opportunity to advance your healthcare career in the Middle East. Apply now!
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
    imageUrl: '/images/services/workshop.webp',
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
