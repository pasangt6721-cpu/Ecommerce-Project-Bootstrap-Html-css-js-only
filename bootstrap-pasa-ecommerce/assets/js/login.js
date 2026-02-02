const diaplayMsg=(msg,spanId,color)=>{
    document.getElementById(spanId).innerHTML=msg
    document.getElementById(spanId).style.color=color
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

const handleSubmit=()=>{
    if(emailValidate()){
        alert('Login Successful ! Redirecting to Home Page...')    
        

        return true
    }
    else{
        return false
    }
        


}
