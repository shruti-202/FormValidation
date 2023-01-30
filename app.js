var inputName=document.getElementById("input-text");
var inputEmail=document.getElementById("input-email");
var inputPassword=document.getElementById("input-password");
var inputConfirm=document.getElementById("input-passwordcheck");
var btnSign=document.getElementById("btn-sign");

var errorName=document.getElementById("name-error");
var errorEmail=document.getElementById("email-error");
var errorPassword=document.getElementById("password-error");
var errorConfirm=document.getElementById("confirm-error");


btnSign.addEventListener("click", function (e){
    e.preventDefault();
    var userName=inputName.value.trim();/**Trim function is use to eliminate spaces*/
    var userEmail=inputEmail.value.trim();
    // var userPassword=inputPassword.value.trim();  We should not use trim function in password field...
    //  var userConfirm=inputConfirm.value.trim();
   console.log(inputPassword.value);
   console.log(inputConfirm.value);

   var nameFormat=(/^[A-Za-z]+$/);
   var emailFormat=(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
   var passwordFormat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

//    Validation...
// User Name...
    if(userName ===""){
        errorName.innerText="Please enter your name";
        errorName.style.color="Red";
        return;
        
    } else if(!userName.match(nameFormat)){
        errorName.innerText="Only letters are allowed";
        errorName.style.color="Red";
        return;
    }
    else if(userName.length <2|| userName.length >30){
        errorName.innerText="Name should be between 3 and 30 characters";
        errorName.style.color="Red";
        return;

    }
// User Email...
    if(userEmail ===""){
        errorEmail.innerText="Please enter your Email";
        errorEmail.style.color="Red";
        return;
     }
     else if(!userEmail.match(emailFormat)){
        errorEmail.innerText="Please enter a valid Email";
        errorEmail.style.color="Red";
        return;
     }
// User Password..
    if(inputPassword.value ===""){
        errorPassword.innerText="Please enter your Password";
        errorPassword.style.color="Red";
        return;
        
    }
    else if(inputPassword.value.length<6||inputPassword.value.length>30){
        errorPassword.innerText="Password should be between 6 and 30 characters";
        errorPassword.style.color="Red";
        return;
    }
    else if(!inputPassword.value.match(passwordFormat)){
        errorPassword.innerText="Password must contain at least one number,uppercase,lowercase letter, special characterat and at least 6 or more characters";
        errorPassword.style.color="Red";
        return;
    }
// Confirm Password...
if(inputConfirm.value===""){
    errorConfirm.innerText="Please re-enter your Password";
    errorConfirm.style.color="Red";
    return;
}
    else if(inputConfirm.value!==inputPassword.value){
        errorConfirm.innerText="Your password do not match";
        errorConfirm.style.color="Red";
        return;
        
    }
    resetForm();
    alert("Congratulations! Your Registration has been completed successfully.");
    // resetForm();
    
})
function resetValue(){
    errorName.innerText="";
    errorEmail.innerText="";
    errorPassword.innerText="";
    errorConfirm.innerText="";
}

function resetForm(){
    inputName.value="";
    inputEmail.value="";
    inputPassword.value="";
    inputConfirm.value="";
}
inputName.addEventListener("input",resetValue);
inputEmail.addEventListener("input",resetValue);
inputPassword.addEventListener("input",resetValue);
inputConfirm.addEventListener("input",resetValue);




