const form =document.getElementById("form")
const uname=document.getElementById("uname")
console.dir(uname)
const email=document.getElementById("email");
const password=document.getElementById("password")
const cpassword=document.getElementById("cpassword")
const tandc=document.getElementById("tc")

var isuname=false
var isemail=false
var ispassword=false
var iscpassword=false
var istandc=false

uname.addEventListener('keyup',checkuname)
email.addEventListener('keyup',checkemail)
/*password.addEventListener('keyup',checkpassword)
cpassword.addEventListener('keyup',checkcpassword)*/
form.addEventListener('submit',(e)=>{
   e.preventDefault()
    validate()
})
function validate(){
let nameValue=uname.value.trim()
let emailValue=email.value.trim()
let passwordValue=password.value.trim()
let cpasswordValue=cpassword.value.trim()

isuname=false
isemail=false
ispassword=false
iscpassword=false
ispassword=false

//let tandcValue=tandc.value
if(nameValue===""){
SetError(uname,'User name cannot be empty')

}
else if(nameValue.length<3){
    setError(uname,"Username should be minimum 3 characters")
}
else{
setSuccess(uname)
isuname=true
}

if(emailValue==''){
    setError(email,'Email cannot be empty')
}
else if(!emailCheck(emailValue)){
    setError(email,"Enter valid Email id")
}
else{
    setSuccess(email)
    isemail=true
}
if(passwordValue==""){
    setError(password,"Password cannot be empty")
}
else if(passwordValue.length<8){
    setError(password,"Password should be minimum 8 characters long")

}
else{
    setSuccess(password)
    ispassword=true
}
if(cpasswordValue===""){
    setError(cpassword,'Password cannot be empty')
}
else if(cpasswordValue!==passwordValue){
    setError(cpassword,'password does not matched')
}
else{
    setSuccess(cpassword)
    iscpassword=true
}
if(!tandc.checked){
    setError(tc,'click on agree terms and conditions')
}
else{
    setSuccess(tc)
    istandc=true;
}
if(isuname && isemail && ispassword && iscpassword && istandc){
    form.submit()
}

function emailCheck(input){
let emailreg= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let valid=emailreg.test(input)
return valid
}
}
function setError(input,message){
    let parent =input.parentElement;
    let small=parent.querySelector('small')
    small.innerText=message
    parent.classList.add('error')
    parent.classList.remove('success')
        
    }
    function setSuccess(input){
       let parent =input.parentElement;
       parent.classList.add('success')
    parent.classList.remove('error')
    }
function checkuname(){
let nameValue=uname.value.trim()
    if(nameValue===""){
        SetError(uname,'User name cannot be empty')
        
        }
        else if(nameValue.length<3){
            setError(uname,"Username should be minimum 3 characters")
        }
        else{
        setSuccess(uname)
        isuname=true
        }
}
function checkemail(){
    let emailValue=email.value.trim()
    if(emailValue==''){
        setError(email,'Email cannot be empty')
    }
    else if(!emailCheck(emailValue)){
        setError(email,"Enter valid Email id")
    }
    else{
        setSuccess(email)
        isemail=true
    }
}
/*function checkpassword(){
    let passwordValue=password.value.trim()
    if(passwordValue==""){
        setError(password,"Password cannot be empty")
    }
    else if(passwordValue.length<8){
        setError(password,"Password should be minimum 8 characters long")
    
    }
    else{
        setSuccess(password)
        ispassword=true
    }
}
function checkcpassword(){
    let cpassword=document.getElementById("cpassword")
    if(cpasswordValue===""){
        setError(cpassword,'Password cannot be empty')
    }
    else if(cpasswordValue!==passwordValue){
        setError(cpassword,'password does not matched')
    }
    else{
        setSuccess(cpassword)
        iscpassword=true
    }
}*/
