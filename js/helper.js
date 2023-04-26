window.onscroll = function() {
  let head = document.getElementById("head");
  if (window.pageYOffset > 200){
    head.classList.add("animate__slideInDown");
    head.classList.add("sticky");
  } else {
    head.classList.remove("sticky");
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function moreShow(sec) {

  document.querySelector(sec + ' .moreButton').classList.add("hidden");
  document.querySelector(sec + ' .lessButton').classList.remove("hidden");

  Array.from(document.querySelectorAll(sec + ' .hide')).forEach(function(el) {
    el.classList.remove("hidden");
  });
}

function lessShow(sec) {

  document.querySelector(sec + ' .moreButton').classList.remove("hidden");
  document.querySelector(sec + ' .lessButton').classList.add("hidden");

  Array.from(document.querySelectorAll(sec + ' .hide')).forEach(function(el) {
    el.classList.add("hidden");
  });
}