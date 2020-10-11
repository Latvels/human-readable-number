let digits__1_9 = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let digits__11_19 = ["null","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
let digits__bigTENS = ["null","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];

module.exports = function toReadable(number) {
    let strNum = String(number);

    if (number === 0) 
    return digits__1_9[0];

    if (number % 100 === 0) 
    return (digits__1_9[number / 100] + " hundred ").trim();

    if (strNum.length === 1) {
        return digits__1_9[Number(strNum)];
    }

    if (strNum.length === 3) {
        return numberToString(strNum[0], true) + numberToString(strNum.substr(1, 2));
    }

    return numberToString(strNum);
};

function numberToString(numbers, hundreds = false) {
    if (hundreds) {
        return digits__1_9[Number(numbers)] + " hundred ";
    }

    if (Number(numbers) >= 11 && Number(numbers) <= 19) {
        return digits__11_19[Number(numbers[1])];
    }
    if (Number(numbers) % 10 === 0) {
        return digits__bigTENS[Number(numbers / 10)];
    }

    if (Number(numbers[0]) === 0) {
        return digits__1_9[Number(numbers)];
    }

    let numbers1 = numbers[0];
    let numbers2 = numbers[1];
    
    return digits__bigTENS[Number(numbers1)] + " " + digits__1_9[Number(numbers2)];
}
