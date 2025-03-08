// JavaScript for Form Page functionality
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("custom-form");
    const responseMessage = document.getElementById("form-response");
    
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("full-name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const details = document.getElementById("project-details").value.trim();
            
            if (name === "" || email === "" || phone === "" || details === "") {
                responseMessage.innerHTML = "<p style='color: red;'>All fields are required.</p>";
                return;
            }
            
            if (!validateEmail(email)) {
                responseMessage.innerHTML = "<p style='color: red;'>Please enter a valid email address.</p>";
                return;
            }
            
            responseMessage.innerHTML = "<p style='color: green;'>Thank you! Your submission has been received.</p>";
            form.reset();
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
