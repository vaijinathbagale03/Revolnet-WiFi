const body = document.body;

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Close menu when any nav link is clicked (on mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});

// contact form 
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert("✅ Your message has been sent successfully!");
        form.reset();
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("⚠️ Error: " + error.message);
    }
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  });


// demo section
   document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("demoForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      successMessage.style.display = "block";
      form.reset();
    });
  });

// WhatsApp popups
const notif = document.querySelector(".notification");
setInterval(() => {
  notif.style.visibility = notif.style.visibility === "hidden" ? "visible" : "hidden";
}, 800);

// phone country code
const phoneInput = document.querySelector("#phone");
  window.intlTelInput(phoneInput, {
    initialCountry: "in", 
    separateDialCode: true,
    preferredCountries: ["in", "us", "gb"], 
 })



