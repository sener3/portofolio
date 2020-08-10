var scroll = new SmoothScroll('.nav-item a[href*="#"]', {
  speed: 500,
});

const homeH1 = document.querySelector(".home-h1");
const bitmoji = document.querySelector(".bitmoji");
const button = document.querySelector(".button-blue");

const t1 = new TimelineMax();

t1.fromTo(
  homeH1,
  0.8,
  {
    opacity: "0",
    y: "-100px",
  },
  {
    opacity: "1",
    y: "0",
    ease: Power2.easeOut,
  }
)
  .fromTo(
    bitmoji,
    0.9,
    {
      opacity: "0",
      x: "-110px",
    },
    {
      opacity: "1",
      x: "0px",
      ease: Power2.easeInOut,
    }
  )
  .fromTo(
    button,
    1,
    {
      opacity: "0",
      y: "100px",
    },
    {
      opacity: "1",
      y: "0px",
      ease: Power2.easeOut,
    }
  );
