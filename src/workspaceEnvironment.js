const workspaceEnvironment = `



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