function validateForm() {
    const name = document.forms["contactForm"]["name"].value; // Get the value of the "name" field from the form with the name "contactForm"
    const email = document.forms["contactForm"]["email"].value; // Get the value of the "email" field from the form with the name "contactForm"
    
    if (name === "" || email === "") { // Check if either the "name" or "email" field is empty
        alert("Name and email must be filled out"); // Display an alert message if any of the fields are empty
        return false; // Prevent the form from being submitted
    }
}
