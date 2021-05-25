function playSound(key_pressed){
  switch (key_pressed) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var base = new Audio('sounds/kick-bass.mp3');
      base.play();
      break;
    default: console.log(button_innerHTML);
  }

}

buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i ++){buttons[i].addEventListener("click", function(){
  button_innerHTML = this.innerHTML;
  playSound(button_innerHTML);
  buttonAnimation(button_innerHTML);
});}

document.addEventListener("keydown", function(event){
  playSound(event.key);
  buttonAnimation(event.key);

});

function buttonAnimation(currentKey){
  key_object = document.querySelector("." + currentKey);
  key_object.classList.add("pressed");
  var delayInMilliseconds = 0.1; 
  setTimeout(function() {
  key_object.classList.remove("pressed");
  }, delayInMilliseconds);
}
// var audio = new Audio('sounds/tom-4.mp3');
// audio.play();
