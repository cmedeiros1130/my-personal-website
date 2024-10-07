const navBar = document.querySelector(".navbar");
const navbarOffsetTop = navBar.offsetTop;
const sections = document.querySelectorAll("section");
const navBarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");

const progressBarPercents = [90, 89, 85, 85, 80, 65, 65, 65];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navBarLinks.forEach((link) => link.classList.remove("change"));
      navBarLinks.forEach((navBarLink) => {
        navBarLink.classList.remove("change");
      });

      navBarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progres-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload;
});
