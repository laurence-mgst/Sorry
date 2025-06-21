// Notify backend of page visit
fetch("https://InceptorDev.pythonanywhere.com/notify-visit", {
  method: "POST",
});

// Smooth Scroll Effect
document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Handle Contact Form Submission and send to backend
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const message = this.querySelector("textarea").value;

    fetch("https://InceptorDev.pythonanywhere.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Your message has been sent. Thank you for reaching out!");
        } else {
          alert("There was an error sending your message.");
        }
      })
      .catch(() => {
        alert("There was an error sending your message.");
      });
  });
