/* 
example input:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet 
*/
// I should get values of these four lines as 12, 38, 15, and 77. Adding these together produces 142.
// let regex = /^(\d)(.*?)(\d)$/; = doesn't work

// for (let element of example) {
//     // console.log(element);
//     console.log(element.trim().match(regex));   // output: 12, 38, 12345, 7 = need to find first number in each line from both left a
//     // console.log(element.match(regex));  

//     let matchLast = element.length-1;
  
//   console.log(matchLast);

// }
/* console.log(element.trim().match(regex).join("")) */
/* console.log(element.trim().match(regex)) ; */

// for (let element of example) {  //for each string in array

//   let match = element.trim().match(regex) ; //create array from trimmed strings that contain only numbers
//   let pairs = (match[0]+match[match.length-1]); 
//   let sum =0 
//   match.forEach( (pairs) => { sum += pairs ;  });   
//     console.log(pairs); 
//     console.log(); //sum of all numbers in string
// } 


// Include fs module
import fs from 'fs';

const data = fs.readFileSync('./input.txt', 'utf-8').split('\n');

// console.log(data);


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

//  let pairs = findFirstLast(data);
//  console.log(pairs);


function sumOfPairs(array) {
    let sum = 0;
    for (let element of array) {
            let parsed = parseInt(element); //no second parameter because base10 is default
            sum = sum + parsed; // 12+38+15+77
    }
    return sum;
}

//  let resultSumOfPairs = sumOfPairs(pairs);
//  console.log(resultSumOfPairs);

// Part 2 find speleed out words and convert them to digits
// Idea nr1 find words and convert them to digits, then pass them to function from part1

// Example input:
// two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen


const spelledOutExample = ["Two1nine", "eighTwoThree", "abcone2Threexyz", "xtwone3four", "4Nineeightseven2", "zoneight234", "7pqrstsixteen"];
const spelledOut = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//need function to find all spelled out numbers in a string

//or function to convert spelled out numbers to digits

const singleDigitMap = new Map([
    ['zero', '0'],
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
    ['ten', '10'],
    ['eleven', '11'],
    ['twelve', '12'],
    ['thirteen', '13'],
    ['fourteen', '14'],
    ['fifteen', '15'],
    ['sixteen', '16'],
    ['seventeen', '17'],
    ['eighteen', '18'],
    ['nineteen', '19']
]);


console.log(singleDigitMap.size);

function toLowerCase(array) {
    let result = [];

    for (let element of array) { 
        
       
         result.push(element.toLowerCase()); 
    }
    return result;
}

console.log(toLowerCase(spelledOutExample));

function newString(array) {
    let result = [];


    for (let element of array) {
             result.push(element.replace("nine", "9"));       
    }
    
    return result;
}


console.log(newString(toLowerCase(spelledOutExample)));

function protoReplaceStringFromCharMap(charMap, string) {
    for(const key of charMap.keys()) {
        string = string.replace(key, charMap.get(key));
    }
    return string;


}

console.log(protoReplaceStringFromCharMap(singleDigitMap, "4Nineeightseven27pqrstsixteen"));