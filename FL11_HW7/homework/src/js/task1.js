const emailEntered = prompt("Enter your email here, would you?", "");

if (emailEntered === null) {
    alert ("Cancelled");
} else if (emailEntered.length < 6) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (emailEntered === "user@gmail.com" || emailEntered === "admin@gmail.com"){
    var password = prompt("Please enter your password, would you?", "");
        if (password === null) {
            alert("Cancelled.");
        } else if ( emailEntered !== "user@gmail.com" && password !== "UserPass" || emailEntered !== "admin@gmail.com" && password !== "AdminPass"){
        alert("Wrong password");
        }
} else {
    alert ("I don’t know you");
}