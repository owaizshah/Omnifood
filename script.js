const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

const header = document.querySelector(".header-section");
const mobileBtn = document.querySelector(".mobile-nav");

mobileBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    console.log(href);

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

const sectionHeroEL = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);

obs.observe(sectionHeroEL);

const priceSecEl = document.querySelector(".pricing-section");

const obsPrice = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (entry.isIntersecting) {
      document.querySelector(".plan--1").style.transform = "translateX(0)";
      document.querySelector(".plan--2").style.transform = "translateX(0)";
      console.log(entry);
    }
  },
  {
    root: null,
    threshold: 0.2,
    // rootMargin: "200px",
  }
);

obsPrice.observe(priceSecEl);
