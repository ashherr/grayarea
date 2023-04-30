(function () {
    emailjs.init("your_user_id"); // replace "your_user_id" with the user id from your emailjs account
})();

function sendEmojiEmail() {
    const recipientEmail = document.getElementById('recipientEmail').value;
    const emojiMessage = document.getElementById('emojiMessage').value;

    emailjs.send("your_email_service", "your_template_id", {
        to_email: recipientEmail,
        emoji_message: emojiMessage
    })
        .then(function (response) {
            alert('Email sent successfully!');
        }, function (error) {
            alert('Failed to send email:', error);
        });
}