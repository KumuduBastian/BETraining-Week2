//Chained Callbacks 

/*Make three functions that each wait 1 second and then call the next callback,
 printing 'Step 1 done', 'Step 2 done', 'Step 3 done' in order. */
function step1(callback: (message: string) => void): void {
    setTimeout(() => {
        callback('Step 1 done');
    }, 1000);   
}

function step2(callback: (message: string) => void): void {
    setTimeout(() => {
        callback('Step 2 done');
    }, 1000);
}       
function step3(callback: (message: string) => void): void {
    setTimeout(() => {
        callback('Step 3 done');
    }, 1000);
}   


step1((msg1) => {
    console.log(msg1);      
    step2((msg2) => {
        console.log(msg2);
        step3((msg3) => {
            console.log(msg3);
        });
    });
}   );      

