/*
Description: 
    Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
    Return the resulting string.
Note:
    input will never be an empty string 
*/

function fakeBin(x) {

    let arr = x.split("");
    let arrBin = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arrBin.push(0);
        } else {
            arrBin.push(1);
        }
    }
    let bin = arrBin.join("");

    return bin;
}