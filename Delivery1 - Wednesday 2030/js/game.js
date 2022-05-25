'use strict'

const MARK = '🚩';
const SHOWN = '⬜';
const MINE = '🔅';

const TOTTAL_MINES = 2;
const ROW_SIZE = 4;
const COL_SIZE = 4;
const SIZE = ROW_SIZE*COL_SIZE;

const gLevel = { 
    SIZE: SIZE, 
    MINES: TOTTAL_MINES  
};

var gGame = { 
    isOn: false, 
    shownCount: 0, 
    markedCount: 0, 
    secsPassed: 0 
}

var gBoard;
var gSelector;
gSelector = '.board-container'

function initGame() {
    gBoard = buildBoard()
    console.table(gBoard)
    printMat(gBoard,gSelector)
    gGame.isOn = true
}

// Builds the board   
// Set mines at random locations 
function buildBoard(){
    var cell = {};
    var board = [];
    
    for (var i = 0; i < ROW_SIZE ; i++) {
        
        board[i] = []
        for (var j = 0; j < COL_SIZE ; j++) {
            board[i][j] = cell = { 
                minesAroundCount: -1, // minesAroundCount(i,j)
                isShown: false,
                isMine: false, 
                isMarked: false 
            };
            // console.log('cell=',cell);
            
            
        }
    }
    
    board[1][1].isMine = true;

    
    board[2][3].isMine = true;
    
    board[1][3].isMarked = true;
    

    return board;
}
 
// setMinesNegsCount()
// Return the created board 


// Count mines around each cell and sets
// the cell's minesAroundCount. 
function setMinesNegsCount(board){
//  var minesAroundCount = -1 // init
}

function renderBoard(board){
}

//  Called when a cell (td) is 
// clicked 
function cellClicked(elCell, i, j){
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
  
// Here are the global variables you might be using: 
// gBoard – A Matrix 
// containing cell objects: 
// Each cell: { 
//     minesAroundCount: 4, 
//     isShown: true, 
//     isMine: false, 
//     isMarked: true 
    

 
// The model 
// gLevel = { 
//     SIZE: 4, 
//     MINES: 2 
// }; 
  
// This is an object by which the 
// board size is set (in this case: 
// 4x4 board and how many mines 
// to put) 
// gGame = { 
//     isOn: false, 
//     shownCount: 0, 
//     markedCount: 0, 
//     secsPassed: 0 
// } 
 
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