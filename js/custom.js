/* ----------------------------
      whatsapp
  ------------------------------- */
$(document).on("click", "#send-it", function () {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function () {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new").addClass("show").removeClass("hide"),
      $(".home-chat,.head-home").addClass("hide").removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
  });

window.addEventListener("load", () => {
  /* ----------------------------
        page loader
    ------------------------------- */
  document.querySelector(".js-page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".js-page-loader").style.display = "none";
  }, 600);
});

/* ----------------------------
      curriculum image
  ------------------------------- */
let image = document.getElementById("imgGallery");
let images = [
  "../images/gallery/gallery-1.webp",
  "../images/gallery/gallery-2.webp",
  "../images/gallery/gallery-3.webp",
  "../images/gallery/gallery-4.webp",
  "../images/gallery/gallery-5.webp",
  "../images/gallery/gallery-6.webp",
  "../images/gallery/gallery-7.webp",
  "../images/gallery/gallery-8.webp",
  "../images/gallery/gallery-9.webp",
  "../images/gallery/gallery-10.webp",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 10);
  image.src = images[random];
}, 1000);
