//Delayed Greeting 

/* Make a function called sayHelloLater that waits 2 seconds, then calls a callback with 'Hi, I am late!'. */
function sayHelloLater(callback: (message: string) => void): void {
    setTimeout(() => {
        callback('Hi, I am late!');
    }, 2000);
}

// Example usage:
sayHelloLater((msg) => console.log(msg));
