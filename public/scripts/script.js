var _img_width = 500;
var _img_height = 300;

var filterRunning = true;

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

Caman.Event.listen("renderFinished", function (job) {
  //console.log(renderFinished);
  initialRenderFinished = true;
  
  if (renderFinished !== null) {
    for (var i = 0; i < renderFinished.length; i++) {
      var f = renderFinished[i];
      if (f !== undefined) f();
    }

  }
  // if (renderFinished !== undefined) renderFinished();
  // if (renderFinished2 !== undefined) renderFinished2();
});

var initialRenderFinished = false;
var renderFinished = [() => {initialRenderFinished = true;}];
// loadImage("../wp.jpg");
