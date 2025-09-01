// Success and Error Callback 

/* Make a function that takes two callbacks: one for success and one for error.
 Use Math.random() to decide which to call. */
function successErrorCallback(
    onSuccess: (message: string) => void,
    onError: (error: string) => void    
): void {
    const isSuccess = Math.random() > 0.5;      
    if (isSuccess) {
        onSuccess('Operation was successful!');
    } else {
        onError('Operation failed!');
    }   
}

successErrorCallback(
    (msg) => console.log('Success:', msg),
    (err) => console.error('Error:', err)
);
