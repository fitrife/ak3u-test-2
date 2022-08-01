var slider = tns({
  container: ".city-slider",
  items: 6,
  controls: false,
  nav: false,
  gutter: 20,
  edgePadding: 20,
  mouseDrag: true,
  autoplay: true,
  autoplayTimeOut: 4000,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    992: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});
