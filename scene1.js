// demo.scene1 = function() {};
class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" });
    var homerHealth = 3;
  }

  preload() {
    //Load media
    this.load.image("background", "./assets/background.gif");
    this.load.image("live", "./assets/doughnut.png");
    this.load.image("beer", "./assets/duff.png");
    this.load.spritesheet("sprite", "./assets/sprite3.png", {
      frameWidth: 41.7,
      frameHeight: 75
    });
    this.load.audio("intro", "./assets/Simpsons.mp3");
  }
  create() {
    //Render images
    this.background = this.add.image(320, 118, "background");
    this.player = this.physics.add.sprite(100, 290, "sprite");
    this.player.setScale(1.4);
    // this.duff = this.add.image(510, 150, "beer").setScale(0.45);
    this.life1 = this.add.image(50, 50, "live").setScale(0.7);
    this.life2 = this.add.image(80, 50, "live").setScale(0.7);
    this.life3 = this.add.image(110, 50, "live").setScale(0.7);

    //Homer's animation
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

    //Music
    this.music = this.sound.add("intro", { loop: true });
    this.music.play();

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.duffs = this.physics.add.group();
    createBody(this.duffs, "beer");

    this.physics.add.collider(this.duffs);
    // this.this.physics.add.collider(
    //   this.player,
    //   this.duff,
    //   collectBeer,
    //   null,
    //   this
    // );
  }

  update() {
    //Homer's moves
    this.cursor = this.input.keyboard.createCursorKeys();
    if (this.cursor.right.isDown) {
      this.player.flipX = false;
      this.player.setVelocityX(100);
      // this.player.x++;
    } else if (this.cursor.left.isDown) {
      this.player.flipX = true;
      this.player.setVelocityX(-100);
      // this.player.x--;
    } else if (this.cursor.up.isDown) {
      this.player.setVelocityY(-70);
    } else {
      this.player.setVelocityX(0);
    }
  }
}

function createBody(arr, tipo) {
  var body = arr.create(
    Phaser.Math.Between(100, 700),
    Phaser.Math.Between(20, 400),
    tipo
  );
  body.setBounce(0.8);
  body.setCollideWorldBounds(true);
  body.setVelocityY(500);
}

function collectBeer(sprite, beer) {
  console.log("Sa matao paco");
  homerHealth++;
  beer.disableBody(true, true);

  if (homerHealth <= 3) {
    this.life1 = this.add.image(155, 50, "live");
  }

  createBody(this.duffs, "beer");

  return false;
}

// function
// demo.scene1.prototype = {}
