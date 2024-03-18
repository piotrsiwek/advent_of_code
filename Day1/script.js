import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const example = ["1abc2 ", "pqr3stu8vwx ", "A1b2c3d4e5F", "treb7uchet"];
const regex = /\d/gm; //regex to find all numbers in a string, global and multiline

function findFirstLast(array) {
    let result = [];

    for (let element of array) { 
        let match = element.trim().match(regex) ; //create array from trimmed strings that contain only numbers 
        result.push(match[0] + match[match.length-1]); //from match array use first and last digit and add to result array
    }
    return result;
}

 let pairs = findFirstLast(data);
//   console.log(pairs);


function sumOfPairs(array) {
    let sum = 0;
    for (let element of array) {
            let parsed = parseInt(element); //no second parameter because base10 is default
            sum = sum + parsed; 
    }
    return sum;
}

//  let resultSumOfPairs = sumOfPairs(pairs);
//    console.log("resultSumOfPairs v1:" + "\n" +  resultSumOfPairs);

// Part 2 find speleed out words and convert them to digits
// Idea nr1 find words and convert them to digits, then pass them to function from part1


const spelledOutExample = ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"];

const singleDigitMap = new Map([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
]);


// console.log(singleDigitMap.size);

function toLowerCase(array) {
    let result = [];

    for (let element of array) { 
        
       
         result.push(element.toLowerCase()); 
    }
    return result;
}

// console.log(toLowerCase(spelledOutExample));

function newString(array) {
    let result = [];

    // for each element in array givien in parameter
    for (let element of array) {
        
        //  add to result array element after passing through function ReplaceStringFromCharMap
         result.push(ReplaceStringFromCharMap(singleDigitMap, element));       
    }
    
    return result;
}

// array with finished values after passing through lowercase and replacing function
let finishedvalues = newString(toLowerCase(data));
//  console.log(finishedvalues);


// This function needs to be refactored to work with charMap all keys at the same time adn from the beginning of each string and
// to avoid results like eightwothree -> eigh23
// function ReplaceStringFromCharMap(charMap, string) {
//     for(const key of charMap.keys()) {

//          string = string.replaceAll(key, charMap.get(key));

//     }
//     return string;
// }


function ReplaceStringFromCharMap(charMap, string) {

    let result = "" ;
    let i = 0;
    

    while (i < string.length) {   
        let found = false;      
        for ( const [key, value] of charMap) {
            
            if( string.startsWith(key,i)) {
                string = string.replaceAll(key, charMap.get(key)); //retrieves the value associated with the key from a map 
                found = true;
                break;
            }
        }
        if (!found) {
            i++;
            }
  }

  return string;
}   



let fromFileFinishedValues = newString(toLowerCase(data));
   console.log(fromFileFinishedValues);

let pairs2 = findFirstLast(fromFileFinishedValues);
console.log(pairs2);
 let resultSumOfPairs2 = sumOfPairs(pairs2);
  console.log(resultSumOfPairs2);
