document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Perform authentication logic here
    // Example: Check if the user exists in a database
    if (userId === 'sampleUser' && password === 'samplePassword') {
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
