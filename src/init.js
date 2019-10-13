const config = {
  width: 320 * 2,
  height: 180 * 2,
  parent: "container",
  type: Phaser.AUTO,
  pixelArt: true,
  scene: [Scene1],
  scene: {
    preload: preload,
    create: create,
    update: update
  },
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
  // this.load.image("homer", "./assets/homer.gif");
  this.load.image("background", "./assets/background.gif");
  this.load.image("live", "./assets/doughnut.png");
  this.load.spritesheet("sprite", "./assets/sprite3.png", {
    frameWidth: 41.7,
    frameHeight: 75
  });
}

function create() {
  this.background = this.add.image(320, 118, "background");
  // this.homer = this.physics.add.image(50, 200, "homer");
  this.player = this.add.sprite(100, 290, "sprite");
  this.player.setScale(2);
  this.life = this.add.image(50, 50, "live");
  // this.anims.create({
  //   key: "quiet",
  //   frames: this.anims.generateFrameNumbers("sprite", {
  //     frames: [1]
  //   })
  // });
  this.anims.create({
    key: "homer_walks",
    frames: this.anims.generateFrameNumbers("sprite", {
      // start: 1,
      // end: 8,
      frames: [3, 4, 5, 6, 7]
    }),
    repeat: -1,
    frameRate: 6
  });

  this.player.anims.play("homer_walks");
  this.player.anims.play("quiet");
  // this.homer.flipX = true;
  // this.homer.setCollideWorldBounds(true); //Para que no caiga infinitamente y llegue al límite del canvas
  // this.homer.setBounce(0.3); //Rebota al caer

  // this.input.keyboard.on("keydown_RIGHT", () => {
  //   this.homer.setAcceleration(100, 0);
  // });
  // this.input.keyboard.on("keyup_RIGHT", () => {
  //   this.homer.setAcceleration(-0, 0);
  //   this.homer.setVelocity(0);
  // });
}

function update(time, delta) {
  this.cursor = this.input.keyboard.createCursorKeys();
  // Se actualiza constantemente para manipular el juego
  //Delta: en todos los navegadores el movimiento sea el mismo

  if (this.cursor.right.isDown) {
    this.player.flipX = false;
    this.player.x++;
  } else if (this.cursor.left.isDown) {
    this.player.flipX = true;
    this.player.x--;
  } else {
    // this.player.setVelocityX(0);
    // this.player.anims.play("quiet");
  }
}
