start: function playAudio(string) {
  new Audio(string).play();
}
var list = document.getElementsByClassName("drum");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (x) {
    // if (temp) temp.classList.remove("pressed");
    console.log(this.innerHTML);
    temp = this;
    // this.style.color = "white";
    MakeButtonPressed(this);
    AudioPlayerFunction(this.textContent);
    console.log(x);
  });
}
function AudioPlayerFunction(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      playAudio("./sounds/tom-2.mp3");
      break;
    case "s":
      playAudio("./sounds/tom-3.mp3");
      break;
    case "d":
      playAudio("sounds/tom-4.mp3");
      break;
    case "j":
      playAudio("sounds/crash.mp3");
      break;
    case "k":
      playAudio("sounds/kick-bass.mp3");
      break;
    case "l":
      playAudio("sounds/snare.mp3");
      break;
    default:
      console.log("invalid keycode pressed!");
      break;
  }
}
var temp;
document.body.addEventListener("keydown", function (x) {
  // if (temp != null) temp.classList.remove("pressed");
  console.log(x);
  AudioPlayerFunction(x.key);
  temp = document.querySelector("." + x.key);
  if (temp != null) MakeButtonPressed(temp);
});

function MakeButtonPressed(keyval) {
  keyval.classList.add("pressed");
  var c = keyval.style.color;
  keyval.style.color = "white";
  setTimeout(function(){
    keyval.classList.remove("pressed");
    keyval.style.color = c;
  },300);
}
