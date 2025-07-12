document.addEventListener('DOMContentLoaded', () => {
  const dropdownHeaders = document.querySelectorAll('.dropdown-header');

  dropdownHeaders.forEach(header => {
    const section = header.parentElement;
    const content = section.querySelector('.dropdown-content');
    const arrow = header.querySelector('.dropdown-arrow');
    let isAnimating = false;

    // Initialize closed state
    content.style.maxHeight = '0';
    content.style.overflow = 'hidden';

    header.addEventListener('click', (e) => {
      if (isAnimating) return;
      
      const isOpen = section.classList.contains('open');
      isAnimating = true;

      if (isOpen) {
        // Collapse animation
        content.style.maxHeight = content.scrollHeight + 'px';
        requestAnimationFrame(() => {
          content.style.maxHeight = '0';
        });
        section.classList.remove('open');
        section.classList.remove('active');
      } else {
        // Expand animation
        content.style.maxHeight = content.scrollHeight + 'px';
        section.classList.add('open');
        section.classList.add('active');
      }
    });

    content.addEventListener('transitionend', () => {
      if (section.classList.contains('open')) {
        content.style.maxHeight = 'none'; // Allow content to grow naturally
      }
      isAnimating = false;
    });

    // Handle system prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      content.style.transition = 'none';
    }
  });
});