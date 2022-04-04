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

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

function colorToHex(c) {
  var r = Math.max(Math.min(Number(c.r), 255), 0);
  var g = Math.max(Math.min(Number(c.g), 255), 0);
  var b = Math.max(Math.min(Number(c.b), 255), 0);
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}

function hexToColor(hex) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  return {
    r: r,
    g: g,
    b: b,
    a : 255
  };
}

/* accepts parameters
* h  Object = {h:x, s:y, v:z}
* OR 
* h, s, v
* h: [0, 360], s,v: [0, 1]
*/
function hsv2rgb(hsv) {
  let h = hsv.h % 360;
  let s = clamp(hsv.s, 0, 1);
  let v = clamp(hsv.v, 0, 1);
  h = h / 360.0;
  var r, g, b, i, f, p, q, t;
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
  }
  return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
  };
}

// input: r,g,b in [0,255), out: h in [0,360) and s,v in [0,1]
function rgb2hsv(cl) {
let r = clamp(cl.r, 0, 255) / 255.0;
let g = clamp(cl.g, 0, 360) / 255.0;
let b = clamp(cl.b, 0, 360) / 255.0;
let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
return {h: 60*(h<0?h+6:h), s: v&&c/v, v: v};
}

Caman.Pixel.prototype.coordinatesToLocation = Caman.Pixel.coordinatesToLocation
Caman.Pixel.prototype.locationToCoordinates = Caman.Pixel.locationToCoordinates

Caman.Pixel.prototype.putPixelRelative = function (horiz, vert, rgba) {
  var newLoc;
  if (this.c == null) {
      throw "Requires a CamanJS context";
  }
  newLoc = this.loc + (this.c.dimensions.width * 4 * (vert * -1)) + (4 * horiz);
  if (newLoc > this.c.pixelData.length || newLoc < 0) {
      return;
  }
  this.c.pixelData[newLoc] = rgba.r;
  this.c.pixelData[newLoc + 1] = rgba.g;
  this.c.pixelData[newLoc + 2] = rgba.b;
  this.c.pixelData[newLoc + 3] = rgba.a;
  return true;
};