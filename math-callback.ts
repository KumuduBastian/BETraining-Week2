// Math Callback 

/*Create a function that takes two numbers and a callback.
 The function should add the numbers and send the result to the callback. */
function mathCallback(num1: number, num2: number, callback: (result: number) => void): void {
    const sum = num1 + num2;
    callback(sum);
}   

mathCallback(5, 10, (result) => console.log(result));
