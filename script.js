const fireID = "Fire";
const winID = "Win";

function initSounds () {
  createjs.Sound.registerSound("assets/fire.mp3", fireID);
  createjs.Sound.registerSound("assets/win.mp3", winID);
  document.addEventListener("keydown", keyPressed);
}

function playFire () {
    createjs.Sound.play(fireID);
}

function playWin () {
    createjs.Sound.play(winID);
}



function keyPressed(event) {
    switch (event.keyCode) {
      case 37: // Left Arrow key
        playFire();
        break;
      case 39: // Right Arrow key
         playFire();
        break;
      case 40: // Down Arrow key
        playFire();
        break;
      case 38: // Up Arrow key
        playWin();
        break;
      default:
        return;
    }
    // don't let arrow keys move screen around
    event.preventDefault();
  }

initSounds();