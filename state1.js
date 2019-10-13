//A state is like a scene in a game

var demo = {};
var objects = {};
demo.state1 = function() {};
demo.state1.prototype = {
  preload: function() {},
  create: function() {
    objects.camera.setBackgroundColor("#ff99DD");
  },
  update: function() {}
};

//Preload function: primarely used for images
