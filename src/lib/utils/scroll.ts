// Intersection Observer for scroll animations
export function setupScrollAnimations() {
  if (typeof window === 'undefined') return;

  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    animatedElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
}
