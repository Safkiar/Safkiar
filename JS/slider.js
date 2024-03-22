class SliderView {
  constructor(sliderContainer) {
    this.sliderContainer = sliderContainer;
    this.slides = this.sliderContainer.querySelectorAll(".slide");
    this.btnLeft = this.sliderContainer.querySelector(".slider__btn--left");
    this.btnRight = this.sliderContainer.querySelector(".slider__btn--right");
    this.dotContainer = this.sliderContainer.querySelector(".dots");
    this.maxSlide = this.slides.length;
    this.curSlide = 0;
    this.init();
  }

  createDots() {
    this.slides.forEach((_, i) => {
      this.dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  }

  activateDot(slide) {
    this.sliderContainer
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    this.sliderContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  }

  goToSlide(slide) {
    this.slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  }

  nextSlide = () => {
    if (this.curSlide === this.maxSlide - 1) {
      this.curSlide = 0;
    } else {
      this.curSlide++;
    }
    this.goToSlide(this.curSlide);
    this.activateDot(this.curSlide);
  };

  prevSlide = () => {
    if (this.curSlide === 0) {
      this.curSlide = this.maxSlide - 1;
    } else {
      this.curSlide--;
    }
    this.goToSlide(this.curSlide);
    this.activateDot(this.curSlide);
  };

  init() {
    setTimeout(() => {
      this.slides.forEach((slide) => slide.classList.add("slide-transition"));
    }, 0);
    this.goToSlide(0);
    this.createDots();
    this.activateDot(0);

    this.btnRight.addEventListener("click", this.nextSlide);
    this.btnLeft.addEventListener("click", this.prevSlide);

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    this.dotContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        this.goToSlide(slide);
        this.activateDot(slide);
      }
    });
  }
}

class CertificateButtons {
  constructor() {
    this.certificatesButton1 = document.querySelector(
      ".certificates__button__one"
    );
    this.certificatesButton2 = document.querySelector(
      ".certificates__button__two"
    );
    this.contentDiv = document.querySelector(".WebDevelopment");
    this.isOriginalContent = true;
    this.isFirstButtonActive = false;
    this.originalContent = this.contentDiv.innerHTML;
    this.initialize();
  }

  addButtonClass(button, className) {
    button.classList.add(className);
  }

  switchContent() {
    if (this.isOriginalContent) {
      const newMarkup = `
      <div class="slider">
        <div class="slide firstSlide">
          <div class="testimonial"><div><img src="Images/Certificates/Microsoft.png" alt="" /></div></div>
        </div>
        <div class="slide">
          <div class="testimonial"><div><img src="Images/Certificates/Dyplom.jpg" alt="" /></div></div>
        </div>
        <div class="slide">
          <div class="testimonial"><div><img src="Images/Certificates/Marketing.jpg" alt="" /></div></div>
        </div>
        <div class="slide">
          <div class="testimonial"><div><img src="Images/Certificates/Modern.png" alt="" /></div></div>
        </div>
        <button class="slider__btn slider__btn--left">&larr;</button>
        <button class="slider__btn slider__btn--right">&rarr;</button>
        <div class="dots"></div>
      </div>`;

      const newDOM = document.createRange().createContextualFragment(newMarkup);
      this.contentDiv.innerHTML = "";
      this.contentDiv.appendChild(newDOM);
    } else {
      this.contentDiv.innerHTML = this.originalContent;
    }

    this.isOriginalContent = !this.isOriginalContent;
    this.initializeSlider();
  }

  initializeSlider() {
    const sliderContainer = this.contentDiv.querySelector(".slider");
    if (sliderContainer) {
      new SliderView(sliderContainer);
    }
  }

  addEventListeners() {
    this.certificatesButton1.addEventListener("click", () => {
      if (this.isFirstButtonActive) {
        this.addButtonClass(
          this.certificatesButton1,
          "active__certificates__button__one"
        );
        this.certificatesButton2.classList.remove(
          "active__certificates__button__two"
        );
        this.switchContent();
        this.isFirstButtonActive = false;
      }
    });

    this.certificatesButton2.addEventListener("click", () => {
      if (!this.isFirstButtonActive) {
        this.addButtonClass(
          this.certificatesButton2,
          "active__certificates__button__two"
        );
        this.certificatesButton1.classList.remove(
          "active__certificates__button__one"
        );

        this.switchContent();
        this.isFirstButtonActive = true;
      }
    });
  }

  initialize() {
    this.addEventListeners();
    this.initializeSlider();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new CertificateButtons();
});
