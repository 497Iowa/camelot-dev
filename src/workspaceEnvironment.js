const workspaceEnvironment = `

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

const workspaceRunnerPersist = `
Caman("#test-canvas", function () {
    this.storeOriginalImg();
    this.currentFilter().render();
});

`

module.exports = {
    workspaceEnvironment,
    workspaceRunner,
    workspaceRunnerPersist
}