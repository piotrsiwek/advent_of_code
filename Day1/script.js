import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const regex = /\d/gm; //regex to find all numbers in a string, global and multiline

function findFirstLast(array) {
    let result = [];

    for (let element of array) { 
        let givenmatch = element.trim().match(regex) ; //create array from trimmed strings that contain only numbers 
        if (givenmatch !== null) { // add null check
            result.push(givenmatch[0] + givenmatch[givenmatch.length-1]); //from match array use first and last digit and add to result array
        }    
    }
    return result;
}

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

const singleDigitMap = new Map([
    ['zero', 'zero0zero'],
    ['one', 'one1one'],
    ["two", "two2two"],
    ["three", "three3three"],
    ["four", "four4four"],
    ["five", "five5five"],
    ["six", "six6six"],
    ["seven", "seven7seven"],
    ["eight", "eight8eight"],
    ["nine", "nine9nine"]
]);

function newString(array) {
    let result = [];
    // for each element in array givien in parameter
    for (let element of array) {  
        //  add to result array element after passing through function ReplaceStringFromCharMap
         result.push(ReplaceStringFromCharMap(singleDigitMap, element));       
    }
    
    return result;
}


// This function needs to be refactored to work with charMap all keys at the same time adn from the beginning of each string and
// to avoid results like eightwothree -> eigh23
function ReplaceStringFromCharMap(charMap, string) {
    for(const key of charMap.keys()) {

         string = string.replaceAll(key, charMap.get(key));
        //  console.log("key: " + key +  "charMap.get: " + charMap.get(key) + "string: " + string);
    }
    return string;
}
let fromFileFinishedValues = newString(data);
//  console.log(fromFileFinishedValues);
//  console.log(findFirstLast(fromFileFinishedValues));

console.log("result" + " = " + sumOfPairs(findFirstLast(fromFileFinishedValues)));