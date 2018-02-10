function grid(section, rows, cols, width, height) {
  this.section = section;
  this.rows = rows;
  this.cols = cols;
  this.width = width;
  this.height = height;

  this.init = function () {
    drawGrid();
  }

  function drawGrid() {
    this.svg = d3.select(section).append("svg")
      .attr({ width: width * cols, height: height * rows });
  }

}