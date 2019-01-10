window.onload = function() {
  init();
}

function init() {
  console.log("init fired");
  addToBasket();

  if (document.getElementById('cc') !== null) {
    var slideIndex = 1;
    currentSlide(slideIndex);
  }
}

function open_menu() {
  document.getElementById("menu").style.width = "100%";
}

function close_menu() {
  document.getElementById("menu").style.width = "0%";
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var sel1 = document.getElementById('select1');
var sel2 = document.getElementById('select2');
var sel3 = document.getElementById('select3');

if (sel1 !== null) {
  sel1.addEventListener('change', function() {
    var visItem = document.getElementById(this.value);
    visItem.className = "shirt visible";

    if (this.value == "shirt1") {
      document.getElementById("shirt2").className = "shirt hidden";
    }
    else {
      document.getElementById("shirt1").className = "shirt hidden";
    }
  });

  sel2.addEventListener('change', function() {
    var visItem = document.getElementById(this.value);
    visItem.className = "poster visible";

    if (this.value == "poster1") {
      document.getElementById("poster2").className = "poster hidden";
    }
    else {
      document.getElementById("poster1").className = "poster hidden";
    }
  });

  sel3.addEventListener('change', function() {
    var visItem = document.getElementById(this.value);
    visItem.className = "mug visible";

    if (this.value == "mug1") {
      document.getElementById("mug2").className = "mug hidden";
    }
    else {
      document.getElementById("mug1").className = "mug hidden";
    }
  });
}

var basket = [];

if (typeof(Storage) !== "undefined") {

  if (localStorage.getItem("basket") !== null) {
    basket = JSON.parse(localStorage.getItem("basket") || []);
  }
  else {
    localStorage.setItem("basket", JSON.stringify(basket));
  }

}

var shirtBtn = document.getElementById("shirtBtn");
var posterBtn = document.getElementById("posterBtn");
var mugBtn = document.getElementById("mugBtn");

if (shirtBtn !== null) {
  shirtBtn.addEventListener('click', function() {
    basket.push(sel1.value);
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(basket);
  });

  posterBtn.addEventListener('click', function() {
    basket.push(sel2.value);
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(basket);
  });

  mugBtn.addEventListener('click', function() {
    basket.push(sel3.value);
    localStorage.setItem("basket", JSON.stringify(basket));
    console.log(basket);
  });
}

var clearBtn = document.getElementById("clearBtn");

if (clearBtn !== null) {
    clearBtn.addEventListener('click', function() {
    basket = [];
    localStorage.setItem("basket", JSON.stringify(basket));
    location.reload();
  });
}

function addToBasket() {
  basket = JSON.parse(localStorage.getItem("basket") || []);
  console.log(basket);

  for (var item in basket) {
    var para = document.createElement("p");
    var node = document.createTextNode(basket[item]);
    para.appendChild(node);

    var element = document.getElementById("inBasket");
    element.appendChild(para);
  };
}
