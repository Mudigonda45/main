document.getElementById("notificationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    var message = document.getElementById("message").value;

    if (message.trim() !== "") {
        // Send a request to the server to trigger the notification
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "send_notification.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("notificationStatus").innerHTML = "Notification sent!";
            }
        };
        xhr.send("message=" + message);
    } else {
        document.getElementById("notificationStatus").innerHTML = "Message cannot be empty!";
    }
});
