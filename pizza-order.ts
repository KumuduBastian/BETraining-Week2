//Pizza Order 

/*  Simulate ordering pizza. The function should wait 3 seconds and     
    then call the callback with 'Your pizza is ready!'. */
function orderPizza(callback: (message: string) => void): void { 
    setTimeout(() => {
        callback('Your pizza is ready!');
    }, 3000);
}
        
// Example usage:
orderPizza((msg) => console.log(msg));
