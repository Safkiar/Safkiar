// const obsOptions = {
//   root: null,
//   threshold: 0.5, // Trigger when 50% of the element is in view
// };

// let isSticky = false;

// const obsCallback = function (entries) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting && !isSticky) {
//       // Element is starting to go out of view, make it sticky
//       entry.target.classList.add("sticky");
//       isSticky = true;
//     } else if (entry.isIntersecting && isSticky) {
//       // Element is fully in view, remove sticky
//       entry.target.classList.remove("sticky");
//       isSticky = false;
//     }
//   });
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// const stickyElement = document.getElementById("stickyElement");
// observer.observe(stickyElement);
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
    // Element is starting to go out of view, make it sticky
    stickyElement.classList.add("sticky");
    placeholder.style.display = "block"; // Display the placeholder to avoid content jump
    isSticky = true;
  } else if (window.pageYOffset <= stickyOffset && isSticky) {
    // Element is fully in view, remove sticky
    stickyElement.classList.remove("sticky");
    placeholder.style.display = "none"; // Hide the placeholder
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
