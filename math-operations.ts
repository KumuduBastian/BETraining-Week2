//Math with Different Operations 

/* Write one function that can do addition, subtraction, multiplication, and division. 
It should take two numbers, an operation string, and a callback. 
The callback should be called with the result of the operation. */
enum Operation {
    ADD = 'add',
    SUBTRACT = 'subtract',
    MULTIPLY = 'multiply',
    DIVIDE = 'divide'
}


function mathOperations(
    num1: number, 
    num2: number,   
    operation: Operation | string  ,
    callback: (result: number | string) => void
): void {   
    let result: number | string;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            result = 'Error: Invalid operation';
    }
    callback(result);
}

mathOperations(10, 5, 'add', (result) => console.log('Addition Result:', result));
mathOperations(10, 5, 'subtract', (result) => console.log('Subtraction Result:', result));
mathOperations(10, 5, 'multiply', (result) => console.log('Multiplication Result:', result));
mathOperations(10, 0, 'divide', (result) => console.log('Division Result:', result));
mathOperations(10, 5, 'divide', (result) => console.log('Division Result:', result));
mathOperations(10, 5, 'modulus' as any, (result) => console.log('Invalid Operation Result:', result));
mathOperations(10, 5, 'divide', (result) => console.log('Division Result:', result));


