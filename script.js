// Toggle Navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Contact form submit simulation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission
  const message = document.getElementById('form-message');
  message.textContent = 'Message sent successfully!';
  this.reset(); // Clear form
  setTimeout(() => (message.textContent = ''), 3000);
});
