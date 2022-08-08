// Carrinho
let cartIcon = document.querySelector('#carrinho-icone')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// Abrir Carrinho
cartIcon.onclick = () =>{
    cart.classList.add("active");
  };
  // Fechar Carrinho
  closeCart.onclick=()=>{
    cart.classList.remove("active");
  };

  /* SLIDE */
var index = 0
var i = 0
var slider = document.getElementsByClassName("slider")
var line = document.getElementsByClassName("line")
var tempo = 0

auto()

function show(n) {
  for (let i = 0; i < slider.length; i++) { //slider.legth
    slider[i].style.display = "none"
  }
  for (let i = 0; i < line.length; i++) { //line.leght
    line[i].className = line[i].className.replace("active")
  }
  slider[n - 1].style.display = ("block")
  line[n - 1].className += " active" //add space
}


function auto() {
  index++
  if (index > slider.length) { // to move from first slide
    index = 1
  }

  show(index) // calling show
  setTimeout(auto, 4000) // next slide will apper after 5s
}

function plusSlide(n) {
  index += n // n=1 or n=-1
  if (index > slider.length) { // to move from first slide
    index = 1
  }

  if (index < 1) {
    index = slider.length
  }
  show(index)
}

function correntSlide(n) {
  index = n
  show(index)
}