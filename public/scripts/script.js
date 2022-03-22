var _img_width = 500;
var _img_height = 300;

function loadImage(image_path) {
  Caman("#test-canvas", image_path, function () {
    this.revert();
    this.resize({
        width: _img_width,
        height: _img_height
      });
    
    this.render(); 
});
}

loadImage("../wp.jpg");
