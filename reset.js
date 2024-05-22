function sendResetLink() {
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        displayMessage("Please enter a valid email address.");
        return;
    }

    displayMessage("Sending reset link...");

    // Simulate sending the OTP to the user's email.
    setTimeout(() => {
        displayResetLinkSent(email);
    }, 2000);
}

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
}

function displayResetLinkSent(email) {
    const resetFormDiv = document.getElementById('resetForm');
    resetFormDiv.style.display = 'none';

    const resetLinkSentDiv = document.getElementById('resetLinkSent');
    resetLinkSentDiv.style.display = 'block';
    resetLinkSentDiv.innerText = `An email with a password reset link has been sent to ${email}. Please check your inbox.`;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
