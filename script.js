class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operator = null
    }

    toggleSign() {
        this.currentOperand = this.currentOperand * -1
    }

    appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = (this.currentOperand.toString() || '') + number.toString();
    }

    chooseOperator(operator) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== '') {
            this.compute()
        }
        this.operator = operator
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation = 0
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operator) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
            computation = prev * current
                break
            case '÷':
            computation = current !== 0 ? prev / current : "ERROR"
                break
            case '%':
            computation = prev % current
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operator = null
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand;
        this.previousOperandElement.innerText = this.previousOperand;
    }
}

// Get all variable buttons on the calculator
const number = document.querySelectorAll('.number');
const AC = document.querySelector('.AC');
const operator = document.querySelectorAll('.operator')
const toggleSign = document.querySelector('.pos-neg');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const previousOperandElement = document.querySelector('.previous-operand');
const currentOperandElement = document.querySelector('.current-operand');

const calculator = new Calculator(previousOperandElement, 
    currentOperandElement)

toggleSign.addEventListener('click', () => {
    calculator.toggleSign()
    calculator.updateDisplay()
})

number.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

AC.addEventListener('click', () => {
    calculator.clear()
})

operator.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        calculator.updateDisplay()
    })
})

equals.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

AC.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})
