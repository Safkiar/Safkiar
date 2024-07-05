function addClassAfterDelay(elementId, className, delay, check) {
  setTimeout(function () {
    let element = document.querySelector(`.${elementId}`);
    let elementPrevious = document.querySelector(`.${check}`);
    if (elementPrevious.classList.contains(className) || elementId === check) {
      element.classList.add(className);
    }
    if (element) {
    }
  }, delay);
}

function addStars(delay) {
  setTimeout(function () {
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
  }, delay);
}

document.addEventListener("DOMContentLoaded", function () {
  addClassAfterDelay("firstH", "visibleHeader", 400, "firstH");
  addClassAfterDelay("firstH", "HSlide", 400, "firstH");
  addClassAfterDelay("secondH", "visibleHeader", 1400, "firstH");
  addClassAfterDelay("secondH", "HSlide", 1400, "secondH");
  addClassAfterDelay("thirdH", "visibleHeader", 2400, "secondH");
  addClassAfterDelay("thirdH", "HSlide", 2400, "thirdH");
  addClassAfterDelay("fourthH", "visibleHeader", 3400, "thirdH");
  addClassAfterDelay("fourthH", "HSlide", 3400, "fourthH");
  addClassAfterDelay(
    "expContainer--technology",
    "visibleHeader",
    4500,
    "fourthH"
  );
  addClassAfterDelay(
    "expContainer--technology",
    "technology-transfer",
    4400,
    "expContainer--technology"
  );
  addStars(4750);
});
