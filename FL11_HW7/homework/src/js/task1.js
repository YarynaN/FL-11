const emailEntered = prompt("Enter your email here, would you?", "");

if (emailEntered === null) {
    alert("Cancelled");
} else if (emailEntered.length < 6) {
    alert("I don't know any emails having name length less than 6 symbols.");
} else if (emailEntered === "user@gmail.com" || emailEntered === "admin@gmail.com") {
    let password = prompt("Please enter your password, would you?", "");
    if (password === null) {
        alert("Cancelled.");
    } else if (emailEntered === "user@gmail.com" && password !== "UserPass" || emailEntered === "admin@gmail.com" && password !== "AdminPass") {
        alert("Wrong password");
    } else {
        let changePas = confirm('Do you want to change your password?');
        if (changePas === false) {
            alert("You have failed the change.");
        } else {
            let oldPass = prompt('Write your old Password. please.', '');
            if (oldPass === password) {
                let newPass = prompt('Write a new password, please.', '');
                if (newPass.length < 5) {
                    alert("It’s too short password. Sorry.");
                } else {
                    let confirmedPass = prompt('Confirm your new password again,please.', '');
                    if (confirmedPass !== newPass) {
                        alert("You wrote the wrong password.");
                    } else {
                        alert("You have successfully changed your password.");
                    }
                }
            } else {
                alert("Wrong password");
            }
        }
    }
} else {
    alert("I don’t know you");
}