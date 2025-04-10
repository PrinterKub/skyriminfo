document.getElementById('myForm').addEventListener("submit", function(event){
    event.preventDefault();


    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let problem=document.getElementById('problem').value;

    let isValid=true

    if(username===''){
        document.getElementById('usernameError').textContent='Это обязательное поле.';
        isValid=false;
    } 
    else{
        document.getElementById('usernameError').textContent='';
    }

    let emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('emailError').textContent='Такой почты не существует'
        isValid=false;
    }
    else{
        document.getElementById('emailError').textContent='';
    }

    if(password.length<6){
        document.getElementById('passwordError').textContent='Пароль должен содержать не менее 6 символов'
        isValid=false
    }
    else{
        document.getElementById('passwordError').textContent=''
    }

    if(problem===''){
        document.getElementById('problemError').textContent='Пожалуйста, опишите проблему'
        isValid=false
    }
    else{
        document.getElementById('problemError').textContent=''
    }

    if(isValid){
        alert('Форма успешно отправлена!');
        form.style.display='none'
    }
});

var form=document.getElementById('form-container');
var open=document.getElementById('help');
var close=document.getElementById('close');

open.onclick = function(){
    form.style.display = "block";
}

close.onclick=function(){
    form.style.display="none";
}