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

  var shirt1count = 0;
  var shirt2count = 0;
  var poster1count = 0;
  var poster2count = 0;
  var mug1count = 0;
  var mug2count = 0;

  for (var item in basket) {
    if (basket[item] == "shirt1") {
      shirt1count++;
    }
    else if (basket[item] == "shirt2") {
      shirt2count++;
    }
    else if (basket[item] == "poster1") {
      poster1count++;
    }
    else if (basket[item] == "poster2") {
      poster2count++;
    }
    else if (basket[item] == "mug1") {
      mug1count++;
    }
    else if (basket[item] == "mug2") {
      mug2count++;
    }
  }

  var total = ((shirt1count + shirt2count) * 24.99) + ((poster1count + poster2count) * 11.99) + ((mug1count + mug2count) * 8.99);

  var element = document.getElementById("inBasket");

  if (shirt1count > 0) {
    var para1 = document.createElement("p");
    var node1 = document.createTextNode(shirt1count + " x Black Coldplay T-Shirt @ £24.99 each");

    para1.appendChild(node1);
    element.appendChild(para1);
  }

  if (shirt2count > 0) {
    var para2 = document.createElement("p");
    var node2 = document.createTextNode(shirt2count + " x White Coldplay T-Shirt @ £24.99 each");

    para2.appendChild(node2);
    element.appendChild(para2);
  }

  if (poster1count > 0) {
    var para3 = document.createElement("p");
    var node3 = document.createTextNode(poster1count + " x Coldplay Mylo Xyloto Poster @ £11.99 each");

    para3.appendChild(node3)
    element.appendChild(para3);
  }

  if (poster2count > 0) {
    var para4 = document.createElement("p");
    var node4 = document.createTextNode(poster2count + " x Coldplay Yellow Poster @ £11.99 each");

    para4.appendChild(node4)
    element.appendChild(para4);
  }

  if (mug1count > 0) {
    var para5 = document.createElement("p");
    var node5 = document.createTextNode(mug1count + " x Coldplay Fix You Mug @ £8.99 each");

    para5.appendChild(node5)
    element.appendChild(para5);
  }

  if (mug2count > 0) {
    var para6 = document.createElement("p");
    var node6 = document.createTextNode(mug2count + " x Coldplay Sky Full of Stars Mug @ £8.99 each");

    para6.appendChild(node6)
    element.appendChild(para6);
  }

  if (total > 0) {
    var para7 = document.createElement("p");
    var node7 = document.createTextNode("Total: £" + total);

    para7.appendChild(node7)
    element.appendChild(para7);
  }
}
