const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')
const form=document.getElementById('form')


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(username.value)
    validateinputs();
})

const setError=(element,message)=>{
    const inputcontrol=element.parentElement;
    const errorDisplay=inputcontrol.querySelector('.error');
    errorDisplay.innerText=message;
    inputcontrol.classList.add('error')
    inputcontrol.classList.remove('success')
}
const setSuccess=(element)=>{
    const inputcontrol=element.parentElement;
    const errorDisplay=inputcontrol.querySelector('.error');
    errorDisplay.innerText=' ';
    inputcontrol.classList.add('success')
    inputcontrol.classList.remove('error') 
}
let validateinputs=()=>{
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim()
    const passwordvalue=password.value.trim();
    const password2value=password2.value.trim()
    if(usernamevalue===' '){
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }


    ///email

    if(emailvalue===' '){
        setError(email,'email is required')
    }
    else if(!isValidEmail(email)){
        setError(email,'please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    //password
    if(passwordvalue===' '){
        setError(password,'password is required')
    }
    else if(passwordvalue.length<8){
        setError(password,'password length is short')
    }
    else{
        setSuccess(password)
    }

    //confirm password

}