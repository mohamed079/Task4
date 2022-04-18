var userName = document.querySelector(".username");
var password = document.querySelector(".password");
var togglePassword = document.querySelector('.togglePassword');


userName.addEventListener("blur" , function(){

 
    if(userName.value == ""){
     
        userName.classList.remove("border-success");
        userName.classList.add( "border-danger");
    }
        else{
            userName.classList.add("border-success");
            userName.classList.remove( "border-danger");  
        }

})


togglePassword.addEventListener('click', function () {
    if(password.getAttribute("type") == "password"){
        password.setAttribute("type" , "text")
        togglePassword.classList.add('fa-eye-slash');
    }
    else{
        password.setAttribute("type" , "password");
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');

     }

});

