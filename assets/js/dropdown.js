document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-header').forEach(header => {
    const section = header.parentElement;
    const content = section.querySelector('.dropdown-content');
    const arrow = header.querySelector('.dropdown-arrow');

    header.addEventListener('click', () => {
      const isOpen = section.classList.contains('open');

      if (isOpen) {
        // Collapse
        content.style.height = content.scrollHeight + 'px'; // set initial height
        requestAnimationFrame(() => {
          content.style.height = '0px';
        });
        section.classList.remove('open');
      } else {
        // Expand
        content.style.height = content.scrollHeight + 'px';
        section.classList.add('open');
      }
    });

    content.addEventListener('transitionend', () => {
      if (section.classList.contains('open')) {
        content.style.height = 'auto';
      }
    });
  });
});
