 let buttons = document.querySelectorAll("button")
 let screen = document.querySelector(".screen")

 let operator = ""
 let firstNumber = ""
 let secondNumber = ""
 let result = ""

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === "+" || button.textContent === "-" || button.textContent === "/" || button.textContent === "*" && firstNumber !== "") {
            if (operator !== ""){
                alert("Veuillez utiliser uniquement 2 chiffres")
                return;
            }
            firstNumber = screen.textContent;
            operator = button.textContent;
            console.log(`firstNumber: ${firstNumber}`);
            console.log(`button text is operator : ${operator}`);
            screen.textContent += button.textContent;
        }
        else if (button.textContent === "="){
            calculate();
            screen.textContent = result;
            console.log(`result is : ${result}`);
        }
        else if (button.textContent === "AC"){
            operator = "";
            firstNumber = "";
            secondNumber = "";
            screen.textContent = "";
        }
        else{

            if (result !== ""){
                screen.textContent = button.textContent
                result = ""
            }
            else if (firstNumber === ""  && operator === "" && secondNumber === "") {

                screen.textContent += button.textContent;
                console.log(`first number is  : ${firstNumber}`);
            }
            else {
                secondNumber += button.textContent;
                screen.textContent += button.textContent;
                console.log(`second number is  : ${secondNumber}`);
            }
        }
    })
})

 function calculate() {
    if (operator === "+"){
        result = (parseInt(firstNumber) + parseInt(secondNumber)).toString();
    }
    else if (operator === "-"){
        result = (parseInt(firstNumber) - parseInt(secondNumber)).toString();
    }
    else if (operator === "*"){
        result = (parseInt(firstNumber) * parseInt(secondNumber)).toString();
    }
    else if (operator === "/"){
        result = (parseInt(firstNumber) / parseInt(secondNumber)).toString();
    }
    firstNumber= ""
     secondNumber = ""
     operator = ""
 }
