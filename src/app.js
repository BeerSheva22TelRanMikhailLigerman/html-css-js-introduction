//console.log("Hello World!");
//let a = 5;      // a is a number
// a = a + "5";    // a is a string "55"
// a = + a;        // a is a number 55
// console.log(a);
// //a = a - 5;
// console.log(a, typeof a);
// a =+a;
// console.log(a, typeof a);
// if (a == 6){
//     console.log("is a true")
// }
// a = !!a;
// let a = 0.31415
//console.log(a);
// // a = a.toFixed(2);
// // console.log(a, typeof a);

//  a = !!new Number(0);
//  console.log(a, typeof a);

// Math.trunc //removes the fractional part
// Math.floor //removes the fractional part to down
// Math.ceil //removes the fractional part to up
// Math.round
// Math.random
// parseInt(a) //make parsing for chars until the first non number symbol. If the first symbol isn't a number - return 0
// let a = "256 * 320"
// String.

// a = "abc";
// bb = a.length;
// //console.log("lenght of " + a + " is " + bb);
// console.log(String.fromCodePoint(65, 65));
// const a = "a";
// console.log(("A"+(+a) + "AS").toLowerCase());


// let a = "a";
// console.log((a + (+a) + "as").toLowerCase());


// myToStringInt(123,16);

// ************ MY TO STRING **************************************************************************

// function myToStringInt (number, radix) {
//     // const symbolSet = "0123456789abcdefghijklmnopqrstuvwxyz"

//     radix = Math.abs(radix);
//     radix = Math.round(radix);
//     if (radix < 2 || radix > 36) {
//         radix = 10
//     }

//     const stringPrefix = number < 0 ? '-' : '';
//     number = Math.abs(number);
//     number = Math.round(number);

//     let result = '';
//     // let remainder = 0;
//     do {
//         // remainder = number % radix;       
//         // result = symbolSet.charAt(remainder) + result;
//         result = getSymbol(number, radix) + result;
//         number = parseInt(number / radix);
//     } while (number > 0);
//     return stringPrefix + result;
// }

// function getSymbol(number, radix) {
//     const aCode = 'a'.charCodeAt(0);
//     const delta = aCode - 10;
//     const remainder = number % radix ;
//     return remainder < 10 ? remainder + '' : String.fromCharCode(remainder + delta);
// }

// const strNum = '1011';
// const redix = 10;
// console.log(`string with number ${strNum} for redix ${redix} is ${parseInt(strNum, redix)}`)
// console.log(`string with number ${strNum} for redix ${redix} is ${myParseInt(strNum, redix)}`)


// ************ MY PARS INT ********************************************************************************
//without cheking

// function myParseInt (number, radix) {   
//     number = number.trim();
//    let result = 0;
//    let digit;
//     for (let i = number.length - 1; i >= 0; i--) {
//         digit = number.charAt(i);
//         result = result + (parseInt(number.charAt(i)) * Math.pow(radix, i));
//     }
//     return result;
// }

// ************ Granovsky PARS INT ********************************************************************************
// with number cheking.     First solution

// function myParseInt(strNum, radix) {    
//     strNum = strNum + '';
//     strNum = strNum.trim();
//     let index = strNum.charAt(0) == '-' || strNum.charAt(0) == '+' ? 1 : 0;
//     let res = radix > 1 && radix < 37 ? getDigitCode(strNum, index, radix) : NaN;

//     if (!isNaN(res)) {
//         let digit;
//         index++;
//         while (index < strNum.length &&
//             !isNaN(digit = getDigitCode(strNum, index, radix))) {
//             res = res * radix + digit;
//             index++;
//         }
//         if(strNum[0] == '-') {
//             res = -res
//         }

//     }
//     return res;
// }
// function getDigitCode(strNum, index, redix) {
//     const delta = 'a'.charCodeAt(0) - 10;
//     const symbol = strNum.charAt(index).toLowerCase();
//     const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
//     return code >= 0 && code < redix ? code : NaN;
// }


// ************ Granovsky PARS INT ********************************************************************************
// with number cheking.     Second solution

function myParseInt(number, radix) {    
    number = number + '';
    number = number.trim();
    let index = number.charAt(0) == '-' || number.charAt(0) == '+' ? 1 : 0;
    
    if ((!radix || radix == 16) && getHexdecemalIndex(number.substring(index) )> 0) {
        index += 2;
        radix = 16
    }
    if (!radix) {
        radix = 10;
    }
    let res = radix > 1 && radix < 37 ? getDigitCode(number, index, radix) : NaN;

    if (!isNaN(res)) {
        let digit;
        index++;
        while (index < number.length &&
            !isNaN(digit = getDigitCode(number, index, radix))) {
            res = res * radix + digit;
            index++;
        }
        if(number[0] == '-') {
            res = -res
        }

    }
    return res;
}
function getHexdecemalIndex(str) {
   
    return str.toLowerCase().startsWith('0x') ? 2 : 0;
}
function getDigitCode(strNum, index, redix) {
    const delta = 'a'.charCodeAt(0) - 10;
    const symbol = strNum.charAt(index).toLowerCase();
    const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
    return code >= 0 && code < redix ? code : NaN;
}


function sum (op1 = 10, op2 = 20) {
    return op1 + op2
}

let a1 = 30;
let a2 = 40;

console.log(sum(a1));
