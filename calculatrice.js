const calculator = document.querySelector('.calculator');
const html = document.querySelector('html');
const screen = document.querySelector('.screen');

let firstNumber = "";
let secondNumber = "";
let result = "";
let operator = ""


calculator.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    const button = e.target;
    const type = button.dataset.type;
    const value = button.dataset.value;

    switch (type){
        case 'action':{
            reset()
            break
        }
        case 'number':
            if (operator === "" && secondNumber === "") {
                firstNumber += value
            }
            else if (operator !== "" && firstNumber !== "") {
                secondNumber += value
            }
            screen.textContent = firstNumber + operator + secondNumber;
            break
        case 'operator':
            if (firstNumber === "" && secondNumber === "" || operator !== "") {
                break
            }
            operator = value
            screen.textContent = firstNumber + operator + secondNumber;
            break
        case 'calculate':
            if (firstNumber === "" || secondNumber === "") {
                break
            }
            calculate()
            break
    }

})


html.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key >= 0 && e.key <= 9) {
        if (operator === "" && secondNumber === "") {
            firstNumber += e.key
        }
        else if (operator !== "" && firstNumber !== "") {
            secondNumber += e.key
        }
        screen.textContent = firstNumber + operator + secondNumber;
    }
    else if ((e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") && firstNumber !== "") {
        operator = e.key
        screen.textContent = firstNumber + operator + secondNumber;
    }
    else if (e.key === "Enter"){
        calculate()
    }
    else if (e.key === "Backspace"){
        screen.textContent = screen.textContent.slice(0, screen.textContent.length - 1);
        if (operator !== "" && secondNumber !== "0"){
            secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        }
        else if (operator ===""){
            firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        }
        else if (operator !== "" && firstNumber !== "") {
            operator = ""
        }
    }
})

function calculate(){
    const converted1 = Number(firstNumber)
    const converted2 = Number(secondNumber)
    switch (operator){
        case '+':
            result = converted1 + converted2;
            break
        case '-':
            result = converted1 - converted2;
            break
        case '*':
            result = converted1 * converted2;
            break
        case '/':
            if (converted2 === 0){
                screen.textContent = "ERROR"
                firstNumber = ""
                result = ""
                secondNumber = ""
                operator = ""
                break
            }
            result = converted1 / converted2;
            break
    }
    if (result === "" || firstNumber === "") {
        return;
    }
    screen.textContent = result
    firstNumber = result
    operator = ""
    secondNumber = ""
}
function reset (){
    screen.textContent = "0";
    result = ""
    operator = ""
    secondNumber = ""
    firstNumber = ""
}