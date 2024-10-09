function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    if (name === "" || email === "") {
        alert("Name and email must be filled out");
        return false;
    }
}