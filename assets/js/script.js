document.addEventListener('DOMContentLoaded', function() {

  /* HEADER REDIRECTS ANIMATION */
  const headerLinks = document.querySelectorAll('.nav__ul a');

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

  /* SLIDER IMAGE ANIMATIONS */
  const sliderImages = document.querySelectorAll('.slider-image');
  const pagination = document.querySelector('.slider-pagination');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');

  let currentIndex = 0;
  let interval;

  function showImage(index) {
    sliderImages.forEach((image, i) => {
      image.classList.remove('active');
      if (i === index) {
        image.classList.add('active');
      }
    });
    restartTimer();
  }

  function createPaginationDots() {
    sliderImages.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('slider-pagination-dot');
      if (i === 0) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        showImage(i);
        updateActiveDot(i);
      });
      pagination.appendChild(dot);
    });
  }

  function updateActiveDot(index) {
    const dots = Array.from(pagination.children);
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === index) {
        dot.classList.add('active');
      }
    });
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showImage(currentIndex);
    updateActiveDot(currentIndex);
  }

  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showImage(currentIndex);
    updateActiveDot(currentIndex);
  }

  function restartTimer() {
    clearInterval(interval);
    interval = setInterval(showNextImage, 12000);
  }

  createPaginationDots();
  showImage(currentIndex);
  restartTimer();

  prevButton.addEventListener('click', () => {
    showPreviousImage();
    restartTimer();
  });

  nextButton.addEventListener('click', () => {
    showNextImage();
    restartTimer();
  });

  /* FOOTER FREDIRECT FUNCTION */
  const footerLinks = document.querySelectorAll('.footer-links a');

  footerLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.location.href = href;
    });
  });

/* RESPONSIVE DESIGN */
// Testimonials
document.addEventListener("DOMContentLoaded", function () {
  new Glide('.testimonials', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 'center',
    autoplay: 3000,
    hoverpause: true,
    breakpoints: {
      768: {
        perView: 1
      },
      1200: {
        perView: 2
      }
    }
  }).mount();
});

});
/* BUTTON UP REDIRECTS ANIMATION */
var backToTopButton = document.querySelector('.back-to-top');

// Desplazamiento suave al presionar el botón
backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopButton.style.opacity = 0;
backToTopButton.style.visibility = 'hidden';

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    backToTopButton.style.opacity = 1;
    backToTopButton.style.visibility = 'visible';
  } else {
    backToTopButton.style.opacity = 0;
    backToTopButton.style.visibility = 'hidden';
  }
});

//Modal Function

function openModal(event) {
  event.preventDefault();
  var modalOverlay = document.getElementById("modalOverlay");
  var modalDescription = document.querySelector(".modal-description");
  var modalImage = document.querySelector(".modal-image");
  var description = event.currentTarget.dataset.description;
  var imageSrc = event.currentTarget.dataset.image;
  modalDescription.textContent = description;
  modalImage.src = imageSrc;
  modalOverlay.style.display = "flex";
}

function closeModal(event) {
  if (event.target === event.currentTarget || event.target.classList.contains("modal-close")) {
    var modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "none";
  }
}

