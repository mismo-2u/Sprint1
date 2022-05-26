'use strict'

function printMat(mat, selector) {

    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < mat.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < mat[0].length; j++) {
            var cell = mat[i][j];
            var nigborNum = cell.minesAroundCount
            var className = 'cell cell-' + i + '-' + j;
            var elCell = '';


            if(cell.isShown){
                if(cell.isMine){
                    elCell += MINE;
                }else if(cell.isMarked){
                    elCell += MARK
                }else {
                    if(nigborNum > 0){
                        cell.isClear = false;
                        elCell += nigborNum 
                    } else {
                        cell.isClear = true;
                        elCell += CLEAR;
                    }
                }
            }  
            strHTML += '<td class="'+ className +'" onclick="cellClicked('+'this'+','+i+','+j+')">'+ elCell +'</td>'
        }
            
        strHTML += '</tr>\n'
    }
    strHTML += '</tbody></table>';
    console.log(strHTML);
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}

function countNeighbors(cellI, cellJ, mat) {
    console.log('matrix',mat);
    var neighborsCount = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;

            if (mat[i][j].isMine) neighborsCount++;
        }
    }
    return neighborsCount;
}

function renderCell(i,j, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell-${i}-${j}`);
    elCell.innerHTML = value;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}