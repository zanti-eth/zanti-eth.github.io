document.addEventListener('DOMContentLoaded', () => {
  const dropdownHeaders = document.querySelectorAll('.dropdown-header');

  dropdownHeaders.forEach(header => {
    const section = header.parentElement;

    header.addEventListener('click', () => {
      section.classList.toggle('active');
    });
  });
});
