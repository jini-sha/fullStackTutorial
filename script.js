document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bg-video');
  const videoBtn = document.getElementById('toggle-video');
  videoBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      videoBtn.textContent = 'Pause Video';
    } else {
      video.pause();
      videoBtn.textContent = 'Play Video';
    }
  })


  const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');


function toggleMenu() {
navLinks.classList.toggle('open');
const isExpanded = navLinks.classList.contains('open');
menuButton.setAttribute('aria-expanded', isExpanded);
menuButton.innerHTML = isExpanded ? '✕' : '☰'; 
}


menuButton.addEventListener('click', toggleMenu);



navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
if (navLinks.classList.contains('open')) {
toggleMenu(); // Closes the menu
}
});
});


const contactForm = document.getElementById('contact-form');

const messageDiv = document.getElementById('form-message'); 

if (contactForm && messageDiv) {
contactForm.addEventListener('submit', function(event) {
event.preventDefault();
const nameInput = document.getElementById('name').value;
const emailInput = document.getElementById('email').value;
if (nameInput === '' || emailInput === '') {
	messageDiv.style.display='block';
messageDiv.textContent = 'Please fill out all required fields.';
messageDiv.style.color = 'red';
} else {
	messageDiv.style.display='block';
messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
messageDiv.style.color = 'green';
contactForm.reset();
}
});
}
})
