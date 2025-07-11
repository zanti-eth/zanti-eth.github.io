// Wait until page loads
document.addEventListener('DOMContentLoaded', () => {
  
  // Make all dropdown headers clickable
  document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', () => {
      
      // Toggle the parent section
      const section = header.parentElement;
      section.classList.toggle('open');
      
      // Only parse markdown when opening for the first time
      if (section.classList.contains('open')) {
        const content = section.querySelector('.dropdown-content');
        if (content.getAttribute('data-parsed') !== 'true') {
          content.innerHTML = marked.parse(content.textContent);
          content.setAttribute('data-parsed', 'true');
        }
      }
    });
  });
});