
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

}

pixelCanvas.addEventListener('click', function(){      //add color to cells
    var color = document.getElementById('colorPicker').value;  //select color
    var clickedCell = event.target;
    var cells = document.getElementsByClassName('cell');
    clickedCell.style.backgroundColor =  color 
});
