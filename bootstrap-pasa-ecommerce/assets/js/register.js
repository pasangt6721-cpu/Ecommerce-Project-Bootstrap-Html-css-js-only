const diaplayMsg=(msg,spanId,color)=>{
    document.getElementById(spanId).innerHTML=msg
    document.getElementById(spanId).style.color=color
}


const unameValidate=()=>{
    let uname=document.getElementById('uname').value
    if (uname == ''){
        diaplayMsg('Username cannot be empty','unameError','red')
        return false
    }
    else if(uname.length < 3){
        diaplayMsg('Username cannot be less than 3 charater long.','unameError','red')
        return false
    }
    else if(!uname.match(/^[a-zA-Z][a-zA-Z0-9\_]{2,}$/)){
        diaplayMsg('Username should start with a letter.','unameError','red')
        return false
    }
    else{
        diaplayMsg('Username Valid','unameError','green')
        return true
    }
}

const emailValidate=()=>{
    let email=document.getElementById('email').value
    if (email == ''){
        diaplayMsg('Email cannot be empty','emailError','red')
        return false
    }  
    else if(!email.match(/^[a-zA-Z0-9\_\.]+\@[a-zA-Z]+\.[a-zA-Z]{2,5}$/)){
        diaplayMsg('Invalid Email Address','emailError','red')
        return false
    }
    else{
        diaplayMsg('Email Valid','emailError','Green')
        return true
    }
}

const passwordValidate=()=>{
    let pwd = document.getElementById('pwd').value
    if(pwd == ''){
        diaplayMsg('Password should not be Empty','passwordError','red')
        return false
    }
    else if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)){
        diaplayMsg('Password must contain one capital letter,one specialcharater and one number.','passwordError','red')
        return false
    }
    else{
        diaplayMsg('Valid Password','passwordError','green')
        return true
    }


}

const confirmPasswordValidate=()=>{
    let pwd1 = document.getElementById('pwd').value
    let confirmPwd = document.getElementById('cpwd').value
    if(cpwd==''){
        diaplayMsg('Confirm Password must not be empty.','confirmPasswordError','red')
        return false
    }
    else if(pwd1 != confirmPwd){
        diaplayMsg('Password doesnt match.','confirmPasswordError','red')
        return false
    }
    else{
        diaplayMsg('Password Match','confirmPasswordError','green')
        return true
    }
}

const handleSubmit=()=>{
    if(unameValidate() && emailValidate() && passwordValidate() && confirmPasswordValidate()){
        // let username = document.getElementById('uname').value
        // let user_email = document.getElementById('email').value

        // let userData = {
        //     User : username,
        //     user_email_o : user_email
        // }

        // localStorage.setItem('User_data',JSON.stringify(userData))
        alert('Registration Successful, Please Login !')    
        

        return true
    }
    else{
        return false
    }
        


}



