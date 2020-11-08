function alertFunc() {
    var validPassword = document.getElementById("password-input").value; 
    var vertifyPassword = document.getElementById("vertify-input").value; 
    if (validPassword.length < 8) {
        alert("The passwords are not at least 8 characters long");
    }

    else if (vertifyPassword !== validPassword) {
        alert("The passwords entered don't match");
    }

    else alert("Successfully set password");

    
}