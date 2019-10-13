var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.scene.add("state1", demo.state1);
game.scene.add("state2", demo.state2);
game.scene.start("state1");
