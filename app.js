let currentVal = '';
let previousVal = '';
let operator = '';

document.addEventListener("DOMContentLoaded", () => {
    let top = document.querySelector(".top");
    let bottom = document.querySelector(".bottom");
    
    const n = document.querySelectorAll(".number");
    const numbers  = Array.from(n);


    const operators = document.querySelectorAll(".operator");
    const decimal = document.querySelector(".decumal");
    const equal = document.querySelector(".equal");
    const clear = document.querySelector(".clear")

    numbers.forEach((number) => number.addEventListener("click", (e) => {
        // getValue(e.target.textContent)
        // current.textContent = currentVal;

        getNum(e.target.textContent);
        bottom.textContent = currentVal;
    }))

    operators.forEach((operator) => operator.addEventListener("click", (e) => {
        
        getOper(e.target.textContent);
        bottom.textContent = currentVal;
        top.textContent = previousVal;
    }))

    equal.addEventListener("click", () => {
        operate(previousVal, currentVal, operator);
        bottom.textContent = currentVal;
        top.textContent = previousVal;
    })

    clear.addEventListener("click", () => {
        previousVal = '';
        currentVal = '';
        operator = '';
        bottom.textContent = currentVal;
        top.textContent = previousVal;
    })
})

function getNum(num){
    if(currentVal.length < 6)
        currentVal += num;
}

function getOper(oper){
    operator = oper;
    previousVal = currentVal;
    currentVal = '';
}

function operate(firstVal, secondVal, o){
    let resultant = 0;
    if(o == "+")
        resultant = parseFloat(firstVal) + parseFloat(secondVal);
    else if(o == "-")
        resultant = parseFloat(firstVal) - parseFloat(secondVal);
    else if(o == "*")
        resultant = parseFloat(firstVal) * parseFloat(secondVal);
    else if(o == "/")
        resultant = parseFloat(firstVal) / parseFloat(secondVal);

    resultant = Math.round(resultant * 10000) / 10000;

    previousVal = '';
    currentVal = resultant;
    operator = '';
}