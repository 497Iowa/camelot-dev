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
`

const workspaceRunner = `
Caman("#test-canvas", "./wp.jpg", function () {
    // manipulate image here
    this.revert();
    this.resize({
        width: 500,
        height: 300
      });
    
    this.currentFilter();
    this.render();
  });
  
  
`


module.exports = {
    workspaceEnvironment,
    workspaceRunner
}