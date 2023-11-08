function addToFavorites(heartElement) {
    // Create a new message element
    const message = document.createElement('div');
    message.textContent = 'Toegevoegd aan favorieten';
    message.className = 'message';

    // Append the message to the body element to display it at the top right corner
    document.body.appendChild(message);

    // Position the message at the top right corner
    message.style.position = 'fixed';
    message.style.top = '20px'; // Adjust the vertical position
    message.style.right = '20px'; // Adjust the horizontal position

    // Set a timeout to remove the message after a few seconds
    setTimeout(function() {
        message.remove();
    }, 3000); // Adjust the time (in milliseconds) the message is displayed
}

// <!-- Maya Coelho 2023 -->