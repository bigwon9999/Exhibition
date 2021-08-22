let curPos = 0;
let postion = 0;
const IMAGE_WIDTH = 438;
const leftBtn = document.querySelector(".leftb")
const rightBtn = document.querySelector(".rightb")
const images = document.querySelector(".images")

function prev(){
  if(curPos > 0){
    rightBtn.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
  if(curPos == 0){
    leftBtn.setAttribute('disabled', 'true')
  }
}
function next(){
  if(curPos < 1){
    leftBtn.removeAttribute("disabled")
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
  if(curPos == 1){
    rightBtn.setAttribute('disabled', 'true')
  }
}
 
function init(){
    leftBtn.setAttribute('disabled', 'true')
    leftBtn.addEventListener("click", prev)
    rightBtn.addEventListener("click", next)
}
 
init();