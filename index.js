const passwordLength = document.getElementById('passwordLength')
const password = document.getElementById('password')
const saveButton = document.getElementById('saveButton')
console.log("testing");


const generatePassword = (len) => {

    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "1234567890";
    const symbol = "!@#$%^&*()_"
    const data = lowerAlphabet + upperAlphabet + numeric + symbol;

    let generator = '';

    for (let index = 0; index < len; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
        alert("password generated")
    }, 1000)
}

const savePassword = () => {
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`pasword saya: ${password.value}`))
    saveButton.setAttribute('download', 'mypasswordLOG.txt')
}   

const copyPassword = () => {
    navigator.clipboard.writeText(password.value)
    .then(() => {
        setTimeout(() => {
            alert("copied to clipboard!");
        },1000)
    })
    .catch(err => {
        console.error("gagal copy", err);
    })
}