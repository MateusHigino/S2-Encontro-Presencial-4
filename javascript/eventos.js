function evt_clicavel() {
  alert("O componente " + this.nodeName + " foi clicado!");
}

function evt_recebeFocus() {
  this.classList.add("cor-foco");
}

function evt_perdeFocus() {
  this.classList.remove("cor-foco");
}
//Selecionando os clicaveis
let ele = document.querySelectorAll(".clicavel");
ele.forEach(it => {
  it.addEventListener("click", evt_clicavel);
})
//selecionando os focaveis
ele = document.querySelectorAll(".focavel");
ele.forEach(it => {
  it.addEventListener("focus", evt_recebeFocus);
  it.addEventListener("blur", evt_perdeFocus);
})


/*Codigo fadein e fadeout */
function fadeIn(element, time) {
  processa(element, time, 0, 100);
}

function fadeOut(element, time) {
  processa(element, time, 100, 0);
}

function processa(element, time, initial, end) {
  if (initial == 0) {
    increment = 2;
    element.style.display = "block";
  } else {
    increment = -2;
  }
  opc = initial;
  intervalo = setInterval(function () {
    if ((opc == end)) {
      if (end == 0) {
        element.style.display = "none";
      }
      clearInterval(intervalo);
    } else {
      opc += increment;
      element.style.opacity = opc / 100;
      element.style.filter = "alpha(opacity=" + opc + ")";
    }
  }, time * 10);
}

function chamarfade(tipo) {
  //let ele=document.querySelector(".fade");
  if (tipo=='in')
    $(".fade").fadeIn();
  else
    $(".fade").fadeOut();
  //if (ele.classList.contains("hide"))
  //  ele.classList.remove("hide")
  //else
  //  ele.classList.add("hide");
}