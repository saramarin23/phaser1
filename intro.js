//A state is like a scene in a game
var timedLoop;
var timeLeft = 0;

class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "Intro" }); //Cuando se cargue el constructor, se cargue el del padre
  }

  preload() {}
  create() {
    this.add.text(20, 20, "Loading game...");
    this.timeLeftText = this.add.text(60, 66, "Time: " + timeLeft, {
      fontSize: "32px",
      color: "black"
    });
    timedLoop = this.time.addEvent({
      delay: 1000,
      callback: updateCounter
    });
  }

  update(time, delta) {}
}
function updateCounter() {
  if (timeLeft === 0) {
    game.scene.start("Scene1");
  } else {
    timeLeft--;
    // this.timeLeftText.setText("Time: " + timeLeft);
  }
}

function chageScene(i, Scene1) {
  console.log(i);
  game.scene.start("Scene1");
}

//Preload function: primarely used for images
