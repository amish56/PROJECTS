var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleSound);

  function handleSound() {
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);

    switch (buttonInnerHTML) {
      case 'w':
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case 'a':
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case 's':
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case 'd':
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case 'j':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case 'k':
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'l':
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;



      default:
      console.log(buttonInnerHTML);

    }


  }

}

document.addEventListener("keydown",pressedKey);

function pressedKey(event){
  var key=event.key;
  buttonAnimation1(key);
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'a':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case 's':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:

  }
}

function buttonAnimation(currentkey){
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },400);
}
function buttonAnimation1(currentkey1){
  var activeButton1=document.querySelector("."+currentkey1);
  activeButton1.classList.add("pressed");
  setTimeout(function(){
    activeButton1.classList.remove("pressed");
  },400);
}
