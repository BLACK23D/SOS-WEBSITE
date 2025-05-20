// This script ensures job pages work correctly on True Host
(function() {
  // Check if we're on a job-related page
  var path = window.location.pathname;
  
  // Map of job pages to their hash routes
  var jobRoutes = {
    '/jobs': '/#/jobs',
    '/jobs.html': '/#/jobs',
    '/international-jobs': '/#/international-jobs',
    '/international-jobs.html': '/#/international-jobs',
    '/internal-jobs': '/#/internal-jobs',
    '/internal-jobs.html': '/#/internal-jobs',
    '/apply': '/#/apply',
    '/apply.html': '/#/apply'
  };
  
  // Check if we're on a job-related page
  if (jobRoutes[path]) {
    // Redirect to the hash-based route
    window.location.href = jobRoutes[path];
  }
})();
