function form() {
    event.preventDefault()

    var password = document.getElementById("new_password").value.trim();
    var confirm_password = document.getElementById("confirm_password").value.trim();
    if(password == "" || confirm_password == ""|| username == "" ){
        alert("Please fill in all fields.");
        return;
    }

    else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    else if (password == confirm_password) {
        alert("PASSWORDS match. Form will be submitted.");
        window.location.href = "https://www.google.com";
    } else {
        alert("PASSWORDS doesn't match.");
        return;
    }

    
}