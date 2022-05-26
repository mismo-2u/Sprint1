'use strict'

const MARK = '🚩';
const CLEAR = '';
const MINE = '🔅';

const TOTTAL_MINES = 2;
const ROW_SIZE = 4;
const COL_SIZE = 4;
const SIZE = ROW_SIZE*COL_SIZE;

const gLevel = { 
    SIZE: SIZE, 
    MINES: TOTTAL_MINES  
};

var gSelector = '.board-container';
var gBoard = []

var gGame = { 
    isOn: false,
    clearCellFliptCount: 0, // how many CLEAR cells you flipt
    markedCount: 0,
    secsPassed: 0,
    board: []
}

function initGame() {
    gBoard = buildBoard()
    setNighborCellsMineCount(gBoard)
    printMat(gBoard,gSelector)
}

function setNighborCellsMineCount(mat){
    for (var i = 0; i < mat.length ;  i++) {
        for(var j = 0; j < mat[i].length ; j++){
            var cell = mat[i][j];
            cell.minesAroundCount = countNeighbors(i,j,mat)
        }
    }
}

// Builds the board   
// Set mines at random locations 
function buildBoard(){
    var board = [];
    for (var i = 0; i < ROW_SIZE ; i++) {
        
        board[i] = []
        for (var j = 0; j < COL_SIZE ; j++) {
            board[i][j] = { 
                    minesAroundCount: -1,
                    isShown: false, // this cell flift and has nigbors
                    isClear: true, // this cell has no nigbors
                    isMine: false, 
                    isMarked: false 
            };
        };
    };
    // random Mines placing - should be while to prevent a double take event
    for(var i=0; i < gLevel.MINES ; i++){
        var idxI = getRandomInt(0,ROW_SIZE);
        var idxJ = getRandomInt(0,COL_SIZE);
        if(!board[idxI][idxJ].isMine){
            board[idxI][idxJ].isMine = true;
        }
    }
    
    return board;
}
    
//  Called when a cell (td) is 
// clicked 
function cellClicked(elCell, i, j){
    var cell = gBoard[i][j]
    cell.isShown = true;
    if(cell.minesAroundCount > 0 && !cell.isMine && !cell.isMarked)
        elCell.innerHTML = `${cell.minesAroundCount}`
}

// Called on right click to mark a 
// cell (suspected to be a mine) 
// Search the web (and 
// implement) how to hide the 
// context menu on right click 
function cellMarked(elCell){

}

// Game ends when all mines are 
// marked, and all the other cells 
// are shown 
function checkGameOver(){

} 
 
// When user clicks a cell with no 
// mines around, we need to open 
// not only that cell, but also its 
// neighbors.  
function expandShown(board, elCell,i, j){

}
 
// BONUS: if you have the time 
// later, try to work more like the 
// real algorithm (see description 
// at the Bonuses section below) 
  
// This is an object in which you 
// can keep and update the 
// current game state: 
// isOn: Boolean, when true we 
// let the user play 
// shownCount: How many cells 
// are shown 
// markedCount: How many cells 
// are marked (with a flag) 
// secsPassed: How many seconds 
// passed  
 

// // 