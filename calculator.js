const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

function operate(number1, operator, number2) {
    const n1 = Number(number1);
    const n2 = Number(number2);

    if (operator === '+') return n1 + n2;
    if (operator === '-') return n1 - n2;
    if (operator === '*') return n1 * n2;
    if (operator === '/') {
        if (n2 === 0) return 'Erreur';
        return n1 / n2;
    }
    return n1;
}

let number1 = '';
let number2 = '';
let operator = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        const value = button.innerText;
        const operators = ['+', '-', '*', '/'];


        if (value === 'Clear') {
            number1 = '';
            number2 = '';
            operator = '';
            resultDisplayed = false;
            screen.textContent = '';
            return;
        }

        if (value === '=') {
            if (number1 !== '' && operator !== '' && number2 !== '') {
                const result = operate(number1, operator, number2);

                screen.textContent = result;
                number1 = String(result);
                number2 = '';
                operator = '';
                resultDisplayed = true;
            }
            return;
        }


        if (resultDisplayed && operators.includes(value)) {
            operator = value;
            number2 = '';
            resultDisplayed = false;
            screen.textContent = number1 + operator;
            return;
        }


        if (resultDisplayed) {
            number1 = '';
            number2 = '';
            operator = '';
            resultDisplayed = false;
        }

        if (operators.includes(value)) {
            if (number1 === '') return;


            if (operator !== '' && number2 !== '') {
                number1 = String(operate(number1, operator, number2));
                number2 = '';
            }

            operator = value;
            screen.textContent = number1 + operator;
            return;
        }


        if (operator === '') {
            number1 += value;
            screen.textContent = number1;
        } else {
            number2 += value;
            screen.textContent = number1 + operator + number2;
        }
    });
});