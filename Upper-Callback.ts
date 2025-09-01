//Uppercase Callback 

/* Write a function that takes a string and a callback. 
    The callback should return the string in uppercase. */
function upperCallback(str: string, callback: (result: string) => void): void {
    const upperStr = str.toUpperCase();
    callback(upperStr);
}

upperCallback('hello world', (result) => console.log(result));
