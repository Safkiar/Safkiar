// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger");
//   const mobileNav = document.querySelector(".mobileNav");
//   const bar1 = document.querySelector(".bar1");
//   const bar2 = document.querySelector(".bar2");
//   const bar3 = document.querySelector(".bar3");

//   let switched = localStorage.getItem("switched") === "true";

//   function updateNavState() {
//     if (switched) {
//       bar1.classList.add("animateBar1");
//       bar2.classList.add("animateBar2");
//       bar3.classList.add("animateBar3");
//       mobileNav.classList.add("openDrawer");
//     } else {
//       bar1.classList.remove("animateBar1");
//       bar2.classList.remove("animateBar2");
//       bar3.classList.remove("animateBar3");
//       mobileNav.classList.remove("openDrawer");
//     }
//   }

//   // Temporarily disable transitions
//   function disableTransitions() {
//     mobileNav.style.transition = "none";
//   }

//   // Enable transitions
//   function enableTransitions() {
//     mobileNav.style.transition = "";
//   }

//   // Initialize the navigation state on page load
//   disableTransitions();
//   updateNavState();
//   // Re-enable transitions after a short delay
//   requestAnimationFrame(() => {
//     requestAnimationFrame(() => {
//       enableTransitions();
//     });
//   });

//   hamburger.addEventListener("click", () => {
//     switched = !switched;
//     localStorage.setItem("switched", switched);
//     updateNavState();
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobileNav");
  const bar1 = document.querySelector(".bar1");
  const bar2 = document.querySelector(".bar2");
  const bar3 = document.querySelector(".bar3");

  let switched = localStorage.getItem("switched") === "true"; // Initial state

  function updateNavState() {
    if (switched) {
      bar1.classList.add("animateBar1");
      bar2.classList.add("animateBar2");
      bar3.classList.add("animateBar3");
      mobileNav.classList.add("openDrawer");
    } else {
      bar1.classList.remove("animateBar1");
      bar2.classList.remove("animateBar2");
      bar3.classList.remove("animateBar3");
      mobileNav.classList.remove("openDrawer");
    }
  }

  // Temporarily disable transitions
  function disableTransitions() {
    mobileNav.style.transition = "none";
  }

  // Enable transitions
  function enableTransitions() {
    mobileNav.style.transition = "";
  }

  // Initialize the navigation state on page load
  disableTransitions();
  updateNavState();
  // Re-enable transitions after a short delay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      enableTransitions();
    });
  });

  // Update `switched` based on screen width and handle resize events
  function updateSwitchedBasedOnWidth() {
    switched = window.innerWidth > 650 ? false : switched; // Update only if necessary

    // Persist state in localStorage for future visits
    localStorage.setItem("switched", switched);
    updateNavState();
  }

  // Call initially and on window resize
  updateSwitchedBasedOnWidth();
  window.addEventListener("resize", updateSwitchedBasedOnWidth);

  hamburger.addEventListener("click", () => {
    switched = !switched;
    localStorage.setItem("switched", switched);
    updateNavState();
  });
});
