/* 
example input:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet 
*/
// I should get values of these four lines as 12, 38, 15, and 77. Adding these together produces 142.

// let example = ["1abc2", "1pqr3stu8vwx ", "a1b2c3d4e5f", "treb7uchet"];
//  let regex = /\d/gm;
// // let regex = /^(\d)(.*?)(\d)$/;

// for (let element of example) {
//     // console.log(element);
//     console.log(element.trim().match(regex));   // output: 12, 38, 12345, 7 = need to find first number in each line from both left a
//     // console.log(element.match(regex));  

//     let matchLast = element.length-1;
  
//   console.log(matchLast);

// }
  

let example = ["1abc2 ", "pqr3stu8vwx ", "a1b2c3d4e5f", "treb7uchet"];

const regex = /\d/gm; //regex to find all numbers in a string, global and multiline

for (let element of example) {  //for each string in array

 /* console.log(element.trim().match(regex).join("")) */
  /* console.log(element.trim().match(regex)) ; */
  
  let match = element.trim().match(regex) ; //create array from trimmed strings that contain only numbers
  console.log(match[0]+match[match.length-1]); //from that array use first and last element which is first and last number in strings provided
  } 
  