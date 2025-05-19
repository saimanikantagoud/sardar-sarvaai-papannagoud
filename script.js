// Scroll reveal animation
const elements = document.querySelectorAll('section, .gallery');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in', 'visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.2,
});

elements.forEach(el => observer.observe(el));

// Simulate saving to a "database" using localStorage
function logContact() {
  let contacts = localStorage.getItem('contactClicks') || 0;
  contacts++;
  localStorage.setItem('contactClicks', contacts);
  console.log(`Contact clicked ${contacts} times.`);
}
