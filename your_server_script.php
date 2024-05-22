<?php
// Assuming your SMTP settings and email sending library are properly configured.
// Replace the placeholders with your actual SMTP settings and email sending code.

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents('php://input'), true);
    $email = $requestData['email'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response = array('success' => false, 'message' => 'Invalid email address.');
    } else {
        // Generate a unique token for the reset link (you can use a library like `random_bytes`).
        $resetToken = bin2hex(random_bytes(32));

        // Save the token and email in your database for verification purposes.
        // For this example, we'll just assume the reset link has been successfully sent.
        // In a real-world scenario, you'd have to update this part accordingly.
        // $db->saveResetToken($email, $resetToken);

        // Send the reset link via email.
        $resetLink = "https://example.com/reset-password.php?email=" . urlencode($email) . "&token=" . urlencode($resetToken);
        $emailSubject = "Password Reset";
        $emailBody = "Click the following link to reset your password: " . $resetLink;
        // mail($email, $emailSubject, $emailBody); // Uncomment this line to send the email.

        $response = array('success' => true, 'message' => 'Reset link sent.');
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
