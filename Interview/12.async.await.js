async function myAsyncFunction() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation that might throw an error
        setTimeout(() => {
            const success = false

            if (success) {
                resolve("Async operation succeeded");
            } else {
                reject(new Error("Async operation failed"));
            }
        }, 1000);
    });
}

// Without try...catch
const handleAsyncError = async () => {
    try {
        const result=await myAsyncFunction()
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
};

handleAsyncError();
