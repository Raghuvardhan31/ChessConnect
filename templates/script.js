document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('studentForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from reloading the page

        // Collect form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            school: formData.get('school'),
            age: formData.get('age'),
            mobile: formData.get('mobile'),
            town: formData.get('town'),
            email: formData.get('email'),
            fatherName: formData.get('fatherName')
        };

        // Send email using EmailJS
        emailjs.send("service_y7l8ywg", "template_uld1deb", data)
            .then(
                function(response) {
                    alert("Email sent successfully!");
                    console.log("SUCCESS!", response.status, response.text);
                    window.location.href = "rew_sub.html"; // Redirect to rew_sub.html after successful submission
                },
                function(error) {
                    alert("Failed to send email. Please try again.");
                    console.error("FAILED...", error);
                }
            );
    });
});
