/* 
example input:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet 
*/
// I should get values of these four lines as 12, 38, 15, and 77. Adding these together produces 142.

let example = ["1abc2 ", "pqr3stu8vwx ", "a1b2c3d4e5f", "treb7uchet"];
let regex = /\d/gm;

for (let element of example) {
    // console.log(element);
    console.log(element.trim().match(regex).join(""));   // output: 12, 38, 12345, 7 = need to find first number in each line from both left and right
  }
  
