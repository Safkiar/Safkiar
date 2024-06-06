const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobileNav");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

let switched = false;

hamburger.addEventListener("click", () => {
  if (!switched) {
    bar1.classList.add("animateBar1");
    bar2.classList.add("animateBar2");
    bar3.classList.add("animateBar3");
    mobileNav.classList.add("openDrawer");
    document.body.style.overflow = "hidden";
    switched = true;
  } else {
    bar1.classList.remove("animateBar1");
    bar2.classList.remove("animateBar2");
    bar3.classList.remove("animateBar3");
    mobileNav.classList.remove("openDrawer");
    document.body.style.overflow = "visible";
    switched = false;
  }
});

function updateSwitchedBasedOnWidth() {
  window.innerWidth > 650 ? mobileNav.classList.remove("openDrawer") : null;
  switched = false;
  bar1.classList.remove("animateBar1");
  bar2.classList.remove("animateBar2");
  bar3.classList.remove("animateBar3");
}

updateSwitchedBasedOnWidth();
window.addEventListener("resize", updateSwitchedBasedOnWidth);
