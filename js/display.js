class Display {
    constructor(displayPreviousValue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.tipeOperation = undefined;
        this.actualValue = '';
        this.previousValue = '';
        this.signs = {
            add: '+',
            divide: '%',
            multiply: 'x',
            subtract: '-',
        }
    }

    delete() {
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.actualValue = '';
        this.previousValue = '';
        this.tipeOperation = undefined;
        this.printValues();
    }

    compute(tipe) {
        this.tipeOperation !== 'equal' && this.calculate();
        this.tipeOperation = tipe;
        this.previousValue = this.actualValue.toString() || this.previousValue;
        this.actualValue = '';
        this.printValues();
    }

    addNumber(number) {
        if (number === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayActualValue.textContent = this.actualValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.tipeOperation] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const actualValue = parseFloat(this.actualValue);

        if (isNaN(actualValue) || isNaN(previousValue)) return
        this.actualValue = this.calculator[this.tipeOperation](previousValue, actualValue);
    }
}