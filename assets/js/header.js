document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-header');
    const dropDownMenu = document.querySelector('.dropdown-menu');
    const menuItems = document.querySelectorAll('.dropdown-menu li');
    let toggleBtnIcon;
  
    toggleBtnIcon = document.querySelector('.toggle-header i');
    toggleBtn.addEventListener('click', toggleHeader);
  
    function toggleHeader() {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');
  
      toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
  
    menuItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });
  
    function closeMenu() {
      dropDownMenu.classList.remove('open');
      toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
  
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = dropDownMenu.contains(event.target);
      const isClickInsideToggleBtn = toggleBtn.contains(event.target);
  
      if (!isClickInsideMenu && !isClickInsideToggleBtn) {
        closeMenu();
      }
    });
  
    toggleBtnIcon = document.querySelector('.toggle-header i');
  });

  function smoothScroll(event) {
    event.preventDefault();
  
    const targetUrl = event.currentTarget.getAttribute('href');
  
    // Obtener el identificador de la sección dentro de la URL
    const sectionId = targetUrl.substring(targetUrl.indexOf('#'));
  
    // Redireccionar al archivo HTML y desplazarse a la sección
    window.location.href = targetUrl;
    setTimeout(() => {
      const targetElement = document.querySelector(sectionId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 500); // Ajusta el tiempo de espera según sea necesario
  }
  
  const headerLinks = document.querySelectorAll('a[href^="#"]');

headerLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  const targetId = event.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}
