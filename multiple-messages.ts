//Multiple Messages 

/*Make a function that takes a callback and 
calls it three times with different messages. */
function multipleMessages(callback: (message: string) => void): void {
    callback('First message');
    callback('Second message');
    callback('Third message');
}

multipleMessages((msg) => console.log(msg));