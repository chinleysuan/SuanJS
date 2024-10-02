  // Initialize EmailJS with your user ID
  (function(){
    emailjs.init("ZL9kgKbZ4hF0tZDL1");
})();


// Function to send email using EmailJS
document.getElementById("contact-form").addEventListener("submit",  function(event) {
    event.preventDefault();
    // Send the email using the form data
 
    emailjs.sendForm('service_kh3bube', 'template_iggmohh', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
