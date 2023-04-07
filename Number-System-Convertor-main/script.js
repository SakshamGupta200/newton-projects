"use strict";

let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let convert = document.querySelector('#convert');
let swap = document.querySelector('#swap');
let option_from;
let option_to;

// now add listener
// input.addEventListener("keyup", myResult);
// inputType.addEventListener("change", myResult);
// resultType.addEventListener("change", myResult);

// taking initial value
// if (!NaN(inputType.value)) {


option_from = inputType.value;
option_to = resultType.value;



convert.addEventListener("click", () => {
    myResult();
});
swap.addEventListener("click", () => {
    console.log("swap");

    let a = input.value;
    let b = result.value;

    input.value = b;
    result.value = a;

    let atype = inputType.value;
    let btype = resultType.value;
    inputType.value = btype;
    resultType.value = atype;
});

function validation(inputType, inputvalue) {
    console.log(inputType, inputvalue);
    if (inputType == "Decimal") {
        let regexd = /^\d+(\.\d{1,2})?$/;
        let valid = regexd.test(inputvalue);
        if (valid == false) {
            alert("invalid decimal value");
        }
    } else if (inputType == "Binary") {
        let regexb = /^[0-1]{1,}$/;
        let valid = regexb.test(inputvalue);
        if (valid == false) {
            alert("invalid decimal value");
        }

    } else if (inputType == "Octal") {
        let regexo = /^\d+(\.\d{1,2})?$/;
        let valid = regexo.test(inputvalue);
        if (valid == false) {
            alert("invalid decimal value");
        }

    } else if (inputType == "Hexadecimal") {
        //no validation required
    } else {
        alert("invalid type value");
    }
}

function myResult() {

    validation(inputType.value, input.value);

    // when we change the input and output type vale we need to updata the 
    // option_from and option_to

    option_from = inputType.value;
    option_to = resultType.value;


    //decimal
    if (option_from === "Decimal" && option_to === "Hexadecimal") {
        result.value = (Number(input.value).toString(16));
    } else if (option_from === "Decimal" && option_to === "Octal") {
        result.value = (Number(input.value).toString(8));
    } else if (option_from === "Decimal" && option_to === "Binary") {
        result.value = (Number(input.value).toString(2));
    } else if (option_from === "Decimal" && option_to === "Decimal") {
        result.value = input.value
    }

    //hexadecimal
    if (option_from === "Hexadecimal" && option_to === "Hexadecimal") {
        result.value = input.value
    } else if (option_from === "Hexadecimal" && option_to === "Octal") {
        let HexToDec = parseInt(input.value, 16);
        result.value = (Number(HexToDec).toString(8));
    } else if (option_from === "Hexadecimal" && option_to === "Binary") {
        let HexToDec = parseInt(input.value, 16);
        result.value = (Number(HexToDec).toString(2));
    } else if (option_from === "Hexadecimal" && option_to === "Decimal") {
        result.value = parseInt(input.value, 16);
    }

    //octal
    if (option_from === "Octal" && option_to === "Hexadecimal") {
        let octToDec = parseInt(input.value, 8);
        result.value = (Number(octToDec).toString(16));
    } else if (option_from === "Octal" && option_to === "Octal") {
        result.value = input.value;
    } else if (option_from === "Octal" && option_to === "Binary") {
        let octToDec = parseInt(input.value, 8);
        result.value = (Number(octToDec).toString(2));
    } else if (option_from === "Octal" && option_to === "Decimal") {
        result.value = parseInt(input.value, 8);
    }

    //binary
    if (option_from === "Binary" && option_to === "Hexadecimal") {
        let binToDec = parseInt(input.value, 2);
        result.value = (Number(binToDec).toString(16));
    } else if (option_from === "Binary" && option_to === "Octal") {
        let binToDec = parseInt(input.value, 2);
        result.value = (Number(binToDec).toString(8));
    } else if (option_from === "Binary" && option_to === "Binary") {
        result.value = input.value;
    } else if (option_from === "Binary" && option_to === "Decimal") {
        result.value = parseInt(input.value, 2);

    }
}
// }
