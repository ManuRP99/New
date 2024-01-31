const prompt = require('prompt-sync')({sigint: true});
//const { table } = require('console');
const fs = require('fs');


const helpLog = 'Commands: \n\tedit: Edit a single cell(add mul to edit more than one)\n\tfill: Fills table with 1s\n\tprint: Prints array to tableOutput.txt'
const cleanTerm = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';


let myArray = [];
let printedArray = [];
let rows = Number(prompt('Rows: '));
let columns = Number(prompt('Columns: '));

function generateArray(r, c) {
    console.log(cleanTerm);
    for (let x = 0; x < r; x++) {
        myArray[x] = [];
        for (let y = 0; y < c; y++) {
            myArray[x][y] = 0;
        }
    }
    return myArray;
    
}

function tablify(array) {
    for (let i = 0; i < rows; i++) {
        let printRow = array[i] + '\n';
        console.log(array[i] + '\n');
        fs.appendFileSync('tableOutput.txt', printRow);
    }
}

function fillTable(r, c) {
    console.log(cleanTerm);
    for (let x = 0; x < r; x++) {
        
        for (let y = 0; y < c; y++) {
            myArray[x][y] = 1;
        }
    }
    return myArray;
    
}

function edit(rowI, colI) {
    let newValue = Number(prompt('New value: '));
    myArray[rowI][colI] = newValue;
    return myArray;
}

generateArray(rows, columns);
console.table(myArray);

let exitProgram = false;



while (!exitProgram) {
    console.log(helpLog);
    let userCommand = prompt(' > ');
    console.log(cleanTerm);
    console.table(myArray);
    if (userCommand === 'edit') {
        let targetRow = Number(prompt('Target row: '));
        let targetCol = Number(prompt('Target column: '));
        edit(targetRow, targetCol);
        console.log(cleanTerm);
        console.table(myArray);
    } else if (userCommand === 'fill') {
        fillTable(rows, columns);
        console.table(myArray);
    } else if (userCommand === 'edit mul') {
        let numberOfEdits = Number(prompt('Number of edits: '));
        for (let i = 0; i < numberOfEdits; i++) {
            let targetRow = Number(prompt('Target row: '));
            let targetCol = Number(prompt('Target column: '));
            edit(targetRow, targetCol);
        }
        console.log(cleanTerm);
        console.table(myArray);
    } else if (userCommand === 'print') {
       tablify(myArray);
       fs.appendFileSync('tableOutput.txt', '\n');
    }

}

