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
  let direction = 2
  let MyGrid = new grid('.grid', cells, cells, width, height);
  let MyBus = new bus(0, 0, cells, width, height, direction); //direction NORTH=3
  // Draw Grid
  MyGrid.init();

  MyBus.draw(); //rows:5,width:60,weigth:60

  MyBus.report();
  //Obtenemos el valor : NewOrient
  /*
  var left = Mybus.left();
  MyBus.orient = left;
  Mybus.draw();
  MyBus

  function exampleInitial() {
    myCommand = new command(MyGrid, MyBus);
    //console.log(myCommand);
    var tamaño = $("#listExamples").children().length;
    console.log("***tamaño***");
    console.log(tamaño);
    var i = 0;
    var commandOption = $("#listExamples option[value='step" + (i) + "']");
    console.log(commandOption);
    console.log("***commandOption***");
    console.log(commandOption.text());

    var com = commandOption.text();
    myCommand.executeCommand(com);
    commandOption.remove();
    
    $("#status").html(com);
  }*/


}