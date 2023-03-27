class Calculator {
  memory = 0;
  currentOperand = '';
  previousOperand = '';
  operation = '';
  currentDisplay = '';
  previousDisplay = '';
  screenNumsLimit = 9;

  constructor() {
    this.clear();
  }

  // Detects invalid input conditions to prevent undefined behaviors.
  invalidInput(entry: string): boolean {
    if (parseInt(entry) == 0) {
      return true;
    }
    return false;
  }

  convertSign(): void {
    if (this.invalidInput(this.currentOperand)) {
      return;
    }
    this.currentOperand =
      String(this.currentOperand).charAt(0) === '-'
        ? String(this.currentOperand).slice(1)
        : `-${this.currentOperand}`;
    // const lastTapeIndex = tapePendingCalculation.length - 1;
    // if (lastTapeIndex >= 0) {
    //   tapePendingCalculation[lastTapeIndex] = current;
    // }
  }

  convertDecimal(): void {
    if (this.currentOperand == '') {
      this.currentOperand = '0.';
      // tapePendingCalculation.push(current);
    } else if (this.currentOperand.indexOf('.') === -1) {
      this.currentOperand += '.';
      // tapePendingCalculation[tapePendingCalculation.length - 1] = current;
    }
  }

  // Memory methods
  memoryClear(): void {
    this.memory = 0;
  }

  memoryRecall(): void {
    this.currentOperand = this.memory.toString();
  }

  memorySave(): void {
    this.memory = parseFloat(this.currentOperand);
  }

  memoryAdd(): void {
    this.memory = this.memory + parseFloat(this.currentOperand);
  }

  memorySubtract(): void {
    this.memory = this.memory - parseFloat(this.currentOperand);
  }

  clearDisplay(): void {
    this.currentOperand = '';
  }

  updateDisplay() {
    this.currentDisplay = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousDisplay = `${this.getDisplayNumber(this.previousOperand)} ${
        this.operation
      }`;
    } else {
      this.currentDisplay = '';
    }
  }

  getDisplayNumber(number: string): string {
    const integerDigits = parseFloat(number.split('.')[0]);
    const decimalDigits = number.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  evaluate() {
    // console.log('evaluate start func with operation = ' + this.operation);
    // console.log(
    //   `evaluate start func with currentOp = ${this.currentOperand}  & previousOp = ${this.previousOperand}`
    // );
    let computation = 0;
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;
    switch (this.operation) {
      case '√':
        computation = Math.sqrt(current);
        this.currentOperand = computation.toString().substring(0, 10);
        this.operation = '';
        this.previousOperand = '';
        break;
      case '%':
        computation = parseFloat(
          parseFloat(`${parseFloat(current.toString()) / 100}`).toFixed(8)
        );
        this.currentOperand = computation.toString().substring(0, 10);
        this.operation = '';
        this.previousOperand = '';
        break;
      // default:
      //   return;
    }
    const prev = parseFloat(this.previousOperand);

    if (isNaN(prev)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        console.log('x func called');
        break;
      case '÷':
        computation = prev / current;
        break;
      // default:
      //   return;
    }
    this.currentOperand = computation.toString().substring(0, 10);
    this.operation = '';
    this.previousOperand = '';
  }

  typeOperation(operation: string) {
    this.operation = operation;
    if (this.currentOperand === '') return;
    this.evaluate();
    // this.operation = operation;
    // this.previousOperand = this.currentOperand;
    // this.currentOperand = '';
  }

  checkLimitedNums(): boolean {
    return this.currentOperand.length >= this.screenNumsLimit ? true : false;
  }

  typeNumber(number: number) {
    // Validate nums on screen don't overflow
    if (this.checkLimitedNums()) return;
    // Avoid decimals
    if (number.toString() === '.' && this.currentOperand.includes('.')) return;
    // Input number in second factor when there is an operation and no input on the first factor
    if (this.operation !== '' && this.previousOperand == '') {
      this.previousOperand = this.currentOperand;
      this.currentOperand = number.toString();
      return;
    }
    // Concatenate inputs in single entry
    this.currentOperand =
      this.currentOperand === '0'
        ? number.toString()
        : `${this.currentOperand}${number}`;
  }

  backspace() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = '';
  }
}

export default Calculator;
