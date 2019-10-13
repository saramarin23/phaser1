// var intro = new Phaser.Scene("Scene1");
// var game = new Phaser.Game(320, 180, Phaser.AUTO);

const config = {
  width: 320 * 2,
  height: 180 * 2,
  parent: "container",
  type: Phaser.AUTO,
  pixelArt: true,
  scene: [Intro, Scene1],
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 500
      }
    }
  }
};

var game = new Phaser.Game(config);

function preload() {
  //Preload: renderizar las imágenes
  //Con load lo estamos cargando en la caché pero no lo pinta aún
  // this.load.image("background", "./assets/background.gif");
  // this.load.image("live", "./assets/doughnut.png");
  // this.load.spritesheet("sprite", "./assets/sprite3.png", {
  //   frameWidth: 41.7,
  //   frameHeight: 75
  // });
  // this.load.audio("intro", "./assets/Simpsons.mp3");
}

function create() {
  // platforms = this.physics.add.staticGroup();
  // platforms.create(50, 250, "rock");
  this.music = this.sound.add("intro", { loop: true });
  // this.music.play();
  // this.background = this.add.image(320, 118, "background");
  // this.homer = this.physics.add.image(50, 200, "homer");
  // this.player = this.add.sprite(100, 290, "sprite");
  // console.log(this.player);
  // this.player.setScale(2);
  // this.player.setGravityY(300);
  // this.life1 = this.add.image(50, 50, "live");
  // this.life2 = this.add.image(100, 50, "live");
  // this.life3 = this.add.image(150, 50, "live");
  // this.anims.create({
  //   key: "homer_walks",
  //   frames: this.anims.generateFrameNumbers("sprite", {
  //     // start: 1,
  //     // end: 8,
  //     frames: [3, 4, 5, 6, 7]
  //   }),
  //   repeat: -1,
  //   frameRate: 6
  // });

  // this.player.anims.play("homer_walks");
  // this.player.setCollideWorldBounds(true); //Para que no caiga infinitamente y llegue al límite del canvas
  // this.player.setBounce(0.3); //Rebota al caer

  // this.input.keyboard.on("keydown_RIGHT", () => {
  //   this.homer.setAcceleration(100, 0);
  // });
  // this.input.keyboard.on("keyup_RIGHT", () => {
  //   this.homer.setAcceleration(-0, 0);
  //   this.homer.setVelocity(0);
  // });
}

function update(time, delta) {
  // this.cursor = this.input.keyboard.createCursorKeys();
  // Se actualiza constantemente para manipular el juego
  //Delta: en todos los navegadores el movimiento sea el mismo
  // if (this.player.isPaused) {
  // }
  // if (this.cursor.right.isDown) {
  //   this.player.flipX = false;
  //   this.player.x++;
  // } else if (this.cursor.left.isDown) {
  //   this.player.flipX = true;
  //   this.player.x--;
  // }
}

game.scene.start("Intro");
game.scene.add("Scene1");
