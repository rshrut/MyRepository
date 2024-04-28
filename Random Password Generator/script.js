let result = document.getElementById("resultPassword")

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-="; 
    let allowedChars = "";
    let password = "";
    allowedChars += includeUppercase ? uppercaseChars:"";
    allowedChars += includeLowercase ? lowercaseChars:"";
    allowedChars += includeNumbers ? numberChars:"";
    allowedChars += includeSymbols ? symbolChars:"";

    // console.log(allowedChars);

    if (length <= 0) {
        return "password length must be at least 1";
        }
    if (allowedChars.length === 0){
        return "At least 1 set of character needs to be selected";
    }

    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];
    }
    result.textContent = `Password : ${password}`;
}

