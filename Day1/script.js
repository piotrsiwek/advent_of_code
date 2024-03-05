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

const example = ["1abc2 ", "pqr3stu8vwx ", "a1b2c3d4e5f", "treb7uchet"];
const regex = /\d/gm; //regex to find all numbers in a string, global and multiline

// for (let element of example) {  //for each string in array

//   let match = element.trim().match(regex) ; //create array from trimmed strings that contain only numbers
//   let pairs = (match[0]+match[match.length-1]); 
//   let sum =0 
//   match.forEach( (pairs) => { sum += pairs ;  });   
//     console.log(pairs); 
//     console.log(); //sum of all numbers in string
// } 

function findFirstLast(array) {
    let result = [];

    for (let element of array) { 
        let match = element.trim().match(regex) ; //create array from trimmed strings that contain only numbers 
        result.push(match[0] + match[match.length-1]); //from match array use first and last digit and add to result array
    }
    return result;
}

let pairs = findFirstLast(example);
console.log(pairs);