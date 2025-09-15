const drawer = document.getElementById('mobile-drawer');
const hamburger = document.getElementById('hamburger');
const scrim = drawer.querySelector('.drawer__scrim');
const drawerClose = drawer.querySelector('[data-close]');
const body = document.body;
const closeEls = document.querySelectorAll('[data-close]'); 
const navLinks = document.querySelectorAll('[data-nav]');

/* Toggle Mobile Menu */
function toggleMobileMenu() {
  const isOpen = drawer.classList.contains('active');
  if (isOpen) {
    closeDrawer();
  } else {
    openDrawer();
  }
}

/* Open Drawer */
function openDrawer() {
  drawer.classList.add('active');
  drawer.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  body.style.overflow = 'hidden';
  const firstLink = drawer.querySelector('a');
  firstLink && firstLink.focus({preventScroll:true});
}

/* Close Drawer */
function closeDrawer() {
  drawer.classList.remove('active');
  drawer.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  body.style.overflow = '';
  hamburger.focus({preventScroll:true});
}
function toggleDrawer() {
    drawer.classList.contains('active') ? closeDrawer() : openDrawer();
  }

/* Event Listeners */
  if (hamburger) hamburger.addEventListener('click', toggleDrawer);
  closeEls.forEach(el => el.addEventListener('click', closeDrawer));
  navLinks.forEach(a => a.addEventListener('click', (e) => {
    // smooth scroll and close
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      const tgt = document.querySelector(href);
      if (tgt) {
        e.preventDefault();
        tgt.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
    closeDrawer();
  }));


/* Close on Escape */
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('active')) {
    closeDrawer();
  }
});
// Toggle dropdown inside mobile drawer
document.querySelectorAll(".drawer .dropbtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = btn.parentElement;
    parent.classList.toggle("open");
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






