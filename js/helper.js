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