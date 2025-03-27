export const prerender = true;

export async function load() {
  return {
    services: [
      {
        title: 'International Recruitment',
        description:
          'Unlock job opportunities beyond borders with Selective Outsourcing Solutions (SOS)!',
        image: '/images/services/international-recruitment.webp',
        href: '/services/international-recruitment'
      },
      {
        title: 'Local Recruitment',
        description: 'Connecting qualified job seekers with top local employers in Kenya.',
        image: '/images/services/local-recruitment.webp',
        href: '/services/local-recruitment'
      },
      {
        title: 'CV & Interview Preparation',
        description:
          'Increase your chances of getting hired with expert CV writing and interview coaching.',
        image: '/images/services/cv-preparation.webp',
        href: '/services/cv-preparation'
      },
      {
        title: 'Career Counseling',
        description: 'Get professional guidance to make the right career decisions.',
        image: '/images/services/career-counseling.webp',
        href: '/services/career-counseling'
      }
    ]
  };
}
