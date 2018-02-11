function bus(x, y, rows, width, height, direction) {
  this.x = x;
  this.y = y;
  this.rows = rows;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.isValidMove = false;

  function validateValues(NewX, NewY, NewDirection) {
    if (NewX !== null && NewY !== null && NewDirection !== null) {
      return true;
    } else {
      return false;
    }
  }

  this.setvalues = function (NewX, NewY, NewDirection) {
    //if (validateValues) {
    this.x = NewX;
    this.y = NewY;
    this.direction = NewDirection;
    this.isInitialized = true;
    this.isValidMove = true;
    //}
  }


  this.move = function () {
    var pos = { x: this.x, y: this.y, direction: this.direction };

    switch (pos.direction) {
      case ROUTE.EAST:
        pos.x++; break;
      case ROUTE.NORTH:
        pos.y++; break;
      case ROUTE.WEST:
        pos.x--; break;
      case ROUTE.SOUTH:
        pos.y--; break;
    }

    this.isValidMove = pos.x >= 0 && pos.y >= 0 && pos.x < this.rows && pos.y < this.rows;

    if (this.isValidMove) {

      this.x = pos.x;
      this.y = pos.y;
    }
  }

  this.left = function () {
    var val = this.direction;
    var newVal = (val + 3) % 4;
    this.direction = newVal;
    this.isValidMove = true;
  }

  this.right = function () {
    var val = this.direction;
    var newVal = (val + 1) % 4;
    this.direction = newVal;
    this.isValidMove = true;
  }

  this.report = function () {
    var dir = ["EAST", "SOUTH", "WEST", "NORTH"];
    alert("x: " + this.x + " y: " + this.y + " direction:" + dir[this.direction]);
  }

  this.draw = function () {
    var polygon = "";
    var busScale = { x: 600, y: 600 }; // below is a 350x350 svg
    var scale;
    polygon = createBus();
    var busContainer = svg.append("g");
    for (var i = 0; i < polygon.length; i++) {
      busContainer.append("path").attr("d", polygon[i]);
    }
    var position;

    console.log("ORIENTACIONNN");
    console.log(this.direction);

    switch (this.direction) {
      case ROUTE.SOUTH:
        console.log("*********SOUTH******");
        scale = [width / busScale.x, height / busScale.y];
        position = [(this.x + 1) * this.width - this.rows, ((this.rows - this.y - 1) * this.height) + this.rows - this.y - 1];
        busContainer.attr("transform", "translate(" + position.join(",") + "), scale(" + scale.join(",") + "), rotate(90)");
        break;

      case ROUTE.EAST:
        console.log("*********EASTTTTT******");
        scale = [width / busScale.x, height / busScale.y];
        position = [(this.x) * this.width + this.x + this.rows, ((this.rows - this.y - 1) * this.height)];
        busContainer.attr("transform", "translate(" + position.join(",") + "), scale(" + scale.join(",") + "), rotate(0)");
        break;
      case ROUTE.WEST:
        console.log("*********WEST******");
        scale = [-1 * width / busScale.x, height / busScale.y];
        position = [(this.x + 1) * this.width - this.rows, ((this.rows - this.y - 1) * this.height)];
        busContainer.attr("transform", "translate(" + position.join(",") + "), scale(" + scale.join(",") + "), rotate(0)");
        break;
      case ROUTE.NORTH:
        scale = [-1 * this.width / busScale.x, -1 * this.height / busScale.y];
        position = [(this.x) * this.width, ((this.rows - this.y) * this.height) - this.rows - this.y];
        console.log(position);
        busContainer.attr("transform", "translate(" + position.join(",") + "), scale(" + scale.join(",") + "), rotate(90)");
        break;
    }

    //console.log(busContainer);
    if (!this.isValidMove) {
      busContainer.selectAll("path").style({ "fill": "red", "stroke": "blue", "stroke-width": 1 });
    } else {
      busContainer.selectAll("path").style({ "fill": "blue" });
    }

  }

  function directionNorth() {

  }

  function createBus() {
    polygon = ["M458.708,115.875C451.036,100.532,435.613,91,418.459,91H75c-41.355,0-75,33.645-75,75v180c0,24.813,20.187,45,45,45\n" +
      "h23.072c10.391,17.916,29.769,30,51.928,30s41.537-12.084,51.928-30h168.144c10.391,17.916,29.769,30,51.928,30\n" +
      "s41.537-12.084,51.928-30H467c24.813,0,45-20.187,45-45v-56.262C512,199.187,470.453,144.633,458.708,115.875z M457.633,181\n" +
      "c8.983,19.073,15.565,39.289,19.607,60H392v-60H457.633z M120,391c-16.542,0-30-13.458-30-30s13.458-30,30-30s30,13.458,30,30\n" +
      "S136.542,391,120,391z M392,391c-16.542,0-30-13.458-30-30s13.458-30,30-30s30,13.458,30,30S408.542,391,392,391z M482,301h-15\n" +
      "c-8.284,0-15,6.716-15,15s6.716,15,15,15h15v15c0,8.271-6.729,15-15,15h-15c0-33.084-26.916-60-60-60s-60,26.916-60,60H180\n" +
      "c0-33.084-26.916-60-60-60s-60,26.916-60,60H45c-8.271,0-15-6.729-15-15v-15h15c8.284,0,15-6.716,15-15s-6.716-15-15-15H30V166\n" +
      "c0-24.813,20.187-45,45-45h343.459c5.719,0,10.859,3.177,13.417,8.292L442.73,151H377c-8.284,0-15,6.716-15,15v90\n" +
      "c0,8.284,6.716,15,15,15h104.274c0.465,6.237,0.726,12.487,0.726,18.738V301z",
    "M317,151h-92c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15h92c8.284,0,15-6.716,15-15v-90\n" +
    "C332,157.716,325.284,151,317,151z M302,241h-62v-60h62V241z",
    "M165,151H75c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15h90c8.284,0,15-6.716,15-15v-90\n" +
    "C180,157.716,173.284,151,165,151z M150,241H90v-60h60V241z"];
    return polygon;
  }
}