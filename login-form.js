const submit = document.getElementById('submit-btn');
submit.addEventListener('click', function () {
    const pass = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Create an object to hold the user data
    const userData = { email, password: pass };

    // Convert the user data to JSON
    const jsonData = JSON.stringify(userData);

    // Create a Blob object containing the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a temporary <a> element to trigger the download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'user_data.json';

    // Trigger the download and cleanup
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
const submitButton = document.getElementById('submit-btn'); // Replace 'submit-btn' with your actual button ID or selector

submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Check if the Notification API is available
    if ('Notification' in window) {
        // Request permission to show notifications
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                // Create and display the notification
                const notification = new Notification('Form Submitted', {
                    body: 'Your form has been successfully submitted.',
                    icon: 'path/to/icon.png' // Replace with the path to your notification icon
                });

                // Close the notification after a few seconds (optional)
                setTimeout(function () {
                    notification.close();
                }, 5000); // Adjust the time (in milliseconds) as needed
            } else {
                console.error('Notification permission denied');
            }
        });
    } else {
        console.error('Notification API is not available in this browser');
    }
});
