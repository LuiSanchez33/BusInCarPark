ROUTE = {
  NONE: -1,
  EAST: 0,
  SOUTH: 1,
  WEST: 2,
  NORTH: 3
}

function main() {
  let cells = 5; //5x5
  let width = 60;
  let height = 60;
  let direction = 3
  let MyGrid = new grid('.grid', cells, cells, width, height);
  let MyBus = new bus(1, 1, cells, width, height, direction); //direction noth=3

  // Draw Grid
  MyGrid.init();

  //Draw Bus
  //MyBus.draw(); //rows:5,width:60,weigth:60

  //Draw Report
  //MyBus.report();

  //readKey();


  this.readKey = function () {
    let key = $("#txtCommand").val();
    //string = key;

    MyBus.report();
    //    console.log(string);
    this.executeKey(key);
    cleanCarPark();
  }

  this.executeKey = function (key) {
    d3.select('.grid').selectAll("path").remove();
    //myBus.isInitialized = true; //comentar luego
    var cmd = this.splitKey(key);
    //console.log(cmd);
    console.log(cmd);
    switch (cmd.command.toUpperCase()) {
      case "PLACE":
        MyBus.setvalues(parseInt(cmd.params[0]), parseInt(cmd.params[1]), parseInt(ROUTE[cmd.params[2].toUpperCase().trim()]));
        break;
      case "MOVE":
        MyBus.move();
        break;
      case "LEFT":
        MyBus.left();
        break;
      case "RIGHT":
        MyBus.right();
        break;
      case "REPORT":
        MyBus.report();
        break;
    }
    MyBus.draw();
  }

}


function splitKey(myKey) {
  myKey = myKey.trim();
  var ind = myKey.trim().indexOf(' ');
  var command = myKey.toUpperCase();
  if (ind > 0)
    command = myKey.substr(0, ind + 1).trim().toUpperCase();
  var params = myKey.substr(ind + 1).replace(/\s\s+/g, '').trim().split(",");
  return { command: command, params: params };
}

function cleanCarPark() {
  $("#txtCommand").val('');
}
