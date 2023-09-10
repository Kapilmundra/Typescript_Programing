"use strict";
/*
Pattern 1
*
* *
* * *
* * * *
*/
function Pattern1(totalline) {
    for (let row = 1; row <= totalline; row++) {
        let str1 = "";
        for (let column = 1; column <= row; column++) {
            str1 = str1 + "* ";
        }
        console.log(str1);
    }
}
console.log("Pattern 1");
Pattern1(4);
console.log("");
/*
Pattern 2
* * * *
* * *
* *
*

*/
function Pattern2(totalline) {
    for (let row = 1; row <= totalline; row++) {
        let str1 = "";
        for (let column = row; column <= totalline; column++) {
            str1 = str1 + "* ";
        }
        console.log(str1);
    }
}
console.log("Pattern 2");
Pattern2(4);
console.log("");
/*
Pattern 3
* * * *
  * * *
    * *
      *
*/
function Pattern3(totalline) {
    for (let row = 1; row <= totalline; row++) {
        let str1 = "";
        for (let column = 1; column <= totalline; column++) {
            if (column < row) {
                str1 = str1 + "  ";
            }
            else {
                str1 = str1 + " *";
            }
        }
        console.log(str1);
    }
}
console.log("Pattern 3");
Pattern3(4);
console.log("");
/*
Pattern 4
 * * * *
  * * *
   * *
    *
*/
function Pattern4(totalline) {
    for (let row = 1; row <= totalline; row++) {
        let str1 = "";
        for (let column = 1; column <= totalline; column++) {
            if (column < row) {
                str1 = str1 + " ";
            }
            else {
                str1 = str1 + " *";
            }
        }
        console.log(str1);
    }
}
console.log("Pattern 4");
Pattern4(4);
console.log("");
/*

Pattern 5
    *
   * *
  * * *
 * * * *
*/
function Pattern5(totalline) {
    for (let row = 1; row <= totalline; row++) {
        let str1 = "";
        for (let column = totalline; column >= 1; column--) {
            if (column > row) {
                str1 = str1 + " ";
            }
            else {
                str1 = str1 + " *";
            }
        }
        console.log(str1);
    }
}
console.log("Pattern 5");
Pattern5(4);
console.log("");
/*
Pattern 6
    *
   * *
  * * *
 * * * *
  * * *
   * *
    *

*/
function Pattern6(totalline) {
    for (let row = 1; row <= totalline; row++) {
        let str1 = "";
        for (let column = totalline; column >= 1; column--) {
            if (column > row) {
                str1 = str1 + " ";
            }
            else {
                str1 = str1 + " *";
            }
        }
        console.log(str1);
    }
    for (let row = 2; row <= totalline; row++) {
        let str1 = "";
        for (let column = 1; column <= totalline; column++) {
            if (column < row) {
                str1 = str1 + " ";
            }
            else {
                str1 = str1 + " *";
            }
        }
        console.log(str1);
    }
}
console.log("Pattern 6");
Pattern6(5);
console.log("");
