// Client-side load function for the services page
export function load() {
  // Define the services data
  const services = [
    {
      id: 'international-recruitment',
      title: 'International Recruitment',
      description: 'Connecting skilled professionals with opportunities in the GCC region.',
      icon: 'international',
      href: '/services/international-recruitment'
    },
    {
      id: 'local-recruitment',
      title: 'Local Recruitment',
      description: 'Finding the best local talent for businesses in Kenya.',
      icon: 'local',
      href: '/services/local-recruitment'
    },
    {
      id: 'cv-preparation',
      title: 'CV & Interview Preparation',
      description: 'Professional guidance to help you stand out to employers.',
      icon: 'cv',
      href: '/services/cv-preparation'
    },
    {
      id: 'career-counseling',
      title: 'Career Counseling',
      description: 'Expert advice to help you navigate your career path.',
      icon: 'counseling',
      href: '/services/career-counseling'
    }
  ];

  return {
    services
  };
}
