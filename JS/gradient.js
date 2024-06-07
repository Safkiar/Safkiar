let isSticky = false;

const stickyElement = document.getElementById("stickyElement");
const placeholder = document.createElement("div");
placeholder.style.width = stickyElement.offsetWidth + "px";
placeholder.style.height = stickyElement.offsetHeight + "px";
placeholder.style.display = "none";
stickyElement.parentNode.insertBefore(placeholder, stickyElement);

const stickyOffset = stickyElement.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > stickyOffset && !isSticky) {
    stickyElement.classList.add("sticky");
    placeholder.style.display = "block";
    isSticky = true;
  } else if (window.pageYOffset <= stickyOffset && isSticky) {
    stickyElement.classList.remove("sticky");
    placeholder.style.display = "none";
    isSticky = false;
  }
});

const element = document.querySelector(".sticker");
const container = document.querySelector(".navbarbox");
const threshold = 1;

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const containerTop = container.getBoundingClientRect().top;
  const isScrolledPast = scrollPosition > containerTop + threshold;

  if (isScrolledPast) {
    element.classList.add("hiddenSticker");
  } else {
    element.classList.remove("hiddenSticker");
  }
});

const allSections = document.querySelectorAll(".section");
const allSections2 = document.querySelectorAll(".section2");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.add("movement");
  observer.unobserve(entry.target);
  if (entry.target.classList[0] === "section") {
    document.querySelectorAll(".firstStar").forEach(function (element) {
      element.classList.add("firstStarMove");
    });
    document.querySelectorAll(".secondStar").forEach(function (element) {
      element.classList.add("secondStarMove");
    });
    document.querySelectorAll(".thirdStar").forEach(function (element) {
      element.classList.add("thirdStarMove");
    });
    document.querySelectorAll(".forthStar").forEach(function (element) {
      element.classList.add("forthStarMove");
    });
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

const sectionObserver2 = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.01,
});

allSections.forEach(function (section) {
  section.classList.add("hidden");
  sectionObserver.observe(section);
});

allSections2.forEach(function (section) {
  // section.classList.add("hidden");
  sectionObserver2.observe(section);
});
