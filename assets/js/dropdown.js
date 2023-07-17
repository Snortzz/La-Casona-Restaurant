const buttons = document.querySelectorAll('.faq-question');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.nextElementSibling;
    const icon = button.querySelector('.question-icon');

    faq.classList.toggle('show');
    icon.classList.toggle('rotate');

    if (faq.classList.contains('show')) {
      faq.style.maxHeight = faq.scrollHeight + 'px';
    } else {
      faq.style.maxHeight = '0';
    }
  });
});