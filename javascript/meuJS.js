/*
function habilitarMenu() {
  let it=document.querySelector("#menu_slide");
  if (it.classList.contains("show"))
    it.classList.remove("show");
  else
    it.classList.add("show");
}

let ele=document.querySelector("#menu-mobile");
ele.addEventListener("click",habilitarMenu);
*/
$("#menu-mobile").click(()=>{
  $("#menu_slide").toggleClass("show")
})