<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $message = $_POST["message"];

    // Send an email notification (this is a simplified example)
    mail("recipient@example.com", "Notification", $message);

    echo "Notification sent!";
} else {
    echo "Invalid request.";
}
?>
