const workspaceEnvironment = `
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

var _original_img;
var rgba;
// var _img_width;
// var _img_height;

function getFromOriginal(x, y) {
    x = Math.max(0, Math.min(_img_width - 1, x));
    y = Math.max(0, Math.min(_img_height - 1, y));
    return _original_img[y][x];
}

Caman.Filter.register("storeOriginalImg", function () {
    _original_img = new Array(_img_height).fill(0).map(() => new Array(_img_width).fill(0));
    this.process("storeOriginalImg", function (rgba) {
        _original_img[rgba.locationXY().y - 1 ][rgba.locationXY().x] = {r: rgba.r, g: rgba.g, b: rgba.b};
    });
    return this;
});


`

const workspaceRunner = `
Caman("#test-canvas", function () {
    this.revert(false);
    this.storeOriginalImg();
    this.currentFilter().render()
});
  
  
`

module.exports = {
    workspaceEnvironment,
    workspaceRunner
}