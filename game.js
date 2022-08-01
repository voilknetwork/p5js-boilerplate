let cnv;
function centerCanvas(cnv) {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}
function setup() {
    cnv = createCanvas(600, 600);
    cnv.style('display', 'block');
    cnv.parent('sketch-holder');
    centerCanvas(cnv);
}
function windowResized() {
    centerCanvas();
}
function draw() {
    background("green")
}