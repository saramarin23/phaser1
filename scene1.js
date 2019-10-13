//A state is like a scene in a game

class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" }); //Cuando se cargue el constructor, se cargue el del padre
  }
  preload() {}
  create() {
    this.add.text(20, 20, "Loading game...");
    this.load.audio("intro", "./assets/Simpsons.mp3");
  }
  update(time, delta) {}
}

// export default Scene1;

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

// module.exports = Scene1;
