const drawer = document.getElementById('mobile-drawer');
const hamburger = document.getElementById('hamburger');
const scrim = drawer.querySelector('.drawer__scrim');
const drawerClose = drawer.querySelector('[data-close]');
const body = document.body;
const closeEls = document.querySelectorAll('[data-close]'); // scrim + close button
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

/* Smooth Scroll + Close Drawer on Nav */
document.querySelectorAll('[data-nav]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeDrawer();
      }
    }
  });
}); 

const slides = document.querySelectorAll('.hero-slider .slide');
let current = 0;

function changeSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(changeSlide, 5000); // Change every 5 seconds
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const scrollAmount = 280 + 16;// adjust per blog card width

function toggleButtons() {
  if (!carousel) return;
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  prevBtn.disabled = carousel.scrollLeft <= 0;
  nextBtn.disabled = carousel.scrollLeft >= maxScrollLeft;
}

if (carousel && prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Update button states on scroll
  carousel.addEventListener("scroll", toggleButtons);
  window.addEventListener("load", toggleButtons);
}

// team section


const teamCarousel = document.getElementById("team-carousel");
const teamPrev = document.getElementById("team-prev");
const teamNext = document.getElementById("team-next");

teamNext.addEventListener("click", () => {
  teamCarousel.scrollBy({ left: 300, behavior: "smooth" });
});

teamPrev.addEventListener("click", () => {
  teamCarousel.scrollBy({ left: -300, behavior: "smooth" });
});



// demo section
document.getElementById("demoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  // if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
  //   alert("Please enter a valid email address.");
  //   return;
  // }

  // Normally you would send data to your server here with fetch()

  document.getElementById("successMessage").style.display = "block";
  this.reset();
});
