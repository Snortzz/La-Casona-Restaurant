const contactForm = document.getElementById('contact-form');
const successMessageContainer = document.getElementById('success-message-container');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');
const formDateField = document.getElementById('date');
const formIpField = document.getElementById('ip');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var form = event.target;

  // Captura la fecha actual
  var currentDate = new Date();
  var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  var formattedDate = currentDate.toLocaleDateString('es-ES', dateOptions);
  formDateField.value = formattedDate;

  // Captura la dirección IP del visitante
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      formIpField.value = data.ip;
      // Envía el formulario a través de AJAX
      submitForm(form);
    });
});

function submitForm(form) {
  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      showSuccessMessage();
    } else {
      showErrorMessage();
    }
    resetForm(form);
  };
  xhr.send(new FormData(form));
}

function resetForm(form) {
  Array.from(form.elements).forEach((element) => {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.value = '';
    }
  });
}

function showSuccessMessage() {
  contactForm.style.opacity = '0';
  successMessageContainer.style.display = 'block';
  successMessage.style.display = 'flex';
  errorMessage.style.display = 'none';
  successMessage.style.opacity = '1';

  // Restablecer el estado de visibilidad y opacidad
  successMessageContainer.style.opacity = '1';
  successMessageContainer.style.display = 'block';

  setTimeout(function() {
    contactForm.style.display = 'none';
    successMessageContainer.style.opacity = '0';
    setTimeout(function() {
      successMessageContainer.style.display = 'none';
      contactForm.style.display = 'block';
      contactForm.style.opacity = '1';
    }, 500); // Cambia el tiempo de transición después de que se oculta el formulario (500 ms)
  }, 4000); // Cambia la duración total del mensaje de éxito (4000 ms)
}

function showErrorMessage() {
  contactForm.style.opacity = '0';
  successMessageContainer.style.display = 'block';
  successMessage.style.display = 'none';
  errorMessage.style.display = 'flex';
  errorMessage.style.opacity = '1';

  // Restablecer el estado de visibilidad y opacidad
  successMessageContainer.style.opacity = '1';
  successMessageContainer.style.display = 'block';

  setTimeout(function() {
    contactForm.style.display = 'none';
    successMessageContainer.style.opacity = '0';
    setTimeout(function() {
      successMessageContainer.style.display = 'none';
      contactForm.style.display = 'block';
      contactForm.style.opacity = '1';
    }, 500); // Cambia el tiempo de transición después de que se oculta el formulario (500 ms)
  }, 4000); // Cambia la duración total del mensaje de error (4000 ms)
}


const contactInfoToggle = document.getElementById('contact-info-toggle');
const contactInfo = document.getElementById('contact-info');

contactInfoToggle.addEventListener('click', function() {
  if (contactInfo.classList.contains('active')) {
    contactInfo.classList.remove('active');
    contactInfoToggle.textContent = 'Mostrar más información';
  } else {
    contactInfo.classList.add('active');
    contactInfoToggle.textContent = 'Mostrar menos';
  }
});
