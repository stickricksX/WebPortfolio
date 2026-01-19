(function () {
  emailjs.init("JASppWlgUHwMBptX7");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_74gurb9",
    "template_pbmbla7",
    this
  )
  .then(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
    form.reset();
  })
  .catch((err) => {
    console.error("EmailJS error:", err);
    status.textContent = "Failed to send message. Try again.";
    status.style.color = "red";
  });
});
