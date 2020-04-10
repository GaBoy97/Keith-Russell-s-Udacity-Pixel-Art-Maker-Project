var colorPicker = document.getElementById("colorPicker");  //Select color
var color = colorPicker.value; 

sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    var height = document.getElementById('inputHeight').value; // Select size input
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});     // When size is submitted by the user, call makeGrid()
 
function makeGrid(height, width) {     // make grid
    var table = document.getElementById('pixelCanvas');
    var grid = '';
    for (var i = 0; i < height; i++) {     //loop over rows to make grid
        grid += '<tr class="row-' + i + '">';
        for (var c = 0; c < width; c++) {  // loop over cells to make grid
            grid += '<td class="cell" id="row-' + i + 'cell-' + c + '"></td>';
        }
        grid += '</tr>';
    }
    table.innerHTML = grid;
    addColorToCells();
};


function addColorToCells() {    //add color to cells
    colorPicker.addEventListener("input", function() {
    color = colorPicker.value;
    });
    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click",  function(event) {
        var clickedCell = event.target;
        clickedCell.style.backgroundColor = color;
      });
    }
  }