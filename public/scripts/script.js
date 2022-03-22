var _img_width = 500;
var _img_height = 300;

Caman("#test-canvas", "../wp.jpg", function () {
    
    
    this.revert();
    this.resize({
        width: _img_width,
        height: _img_height
      });
    
    this.render();
    
    
});