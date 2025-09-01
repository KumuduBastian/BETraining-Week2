/* Hello Callback 

Write a function that takes a callback and calls it with 'Hello from callback!'. */

 function helloCallback(callback: (message: string) => void): void {
    callback('Hello from callback!');
}

// Example usage:
helloCallback((msg) => console.log(msg));

//An a Arrow function that takes a callback and calls it with 'Hello from callback!'. */
const helloCallbackArrow = (callback: (message: string) => void): void => {
    callback('Hello from callback!');
}

helloCallbackArrow((msg) => console.log(msg));




