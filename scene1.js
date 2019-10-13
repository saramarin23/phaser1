//A state is like a scene in a game

class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" }); //Cuando se cargue el constructor, se cargue el del padre
  }
  preload() {
    this.load.audio("intro", "./assets/Simpsons.mp3");
  }
  create() {
    this.add.text(20, 20, "Loading game...");
    //Music
    this.music = this.sound.add("intro", { loop: true });
    this.music.play();
  }
  update(time, delta) {}
}

// var demo = {};
// var objects = {};
// demo.scene1 = function() {};
// demo.scene1.prototype = {
//   preload: function() {},
//   create: function() {
//     objects.camera.setBackgroundColor("#ff99DD");
//   },
//   update: function() {}
// };

//Preload function: primarely used for images
