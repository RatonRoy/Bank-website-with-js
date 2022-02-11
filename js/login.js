// selected all of the html elements 
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
const submitBtn = document.getElementById('btn-submit'); 
submitBtn.addEventListener('click', function () {
    const userEmailValue = userEmail.value;
    const userPasswordValue = userPassword.value; 
    if (userEmailValue == "abcdef@gmail.com" && userPasswordValue == "123456") {
        window.location.href = 'banking.html';
    }
    else {
        console.log(' your password and email id are not match');
    }
})