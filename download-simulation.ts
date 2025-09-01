//Download Simulation 

/* Create a function that takes a URL string and a callback. 
Wait 2 seconds, then call the callback with 'Downloaded data from <URL>'. */
function downloadSimulation(url: string, callback: (message: string) => void): void {
    setTimeout(() => {
        callback(`Downloaded data from ${url}`);
    }, 2000);
}


downloadSimulation('http://example.com', (msg) => console.log(msg));
