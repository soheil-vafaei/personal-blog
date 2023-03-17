const regexMobile = /^(\+98|0098|98|0)?9\d{9}$/
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const formSubmit = document.getElementById('form')

const formInputMobile = document.getElementById('input-number')
const mobileError = document.getElementById('Error-number')

const formInputPass = document.getElementById('input-password')
const passError = document.getElementById('Error-password')

formSubmit.addEventListener('submit',(event)=>{
    event.preventDefault()
    checkNumber(formInputMobile.value)
    checkPass(formInputPass.value)
})

function checkNumber(mobileNumber)
{
    const mobileUser = regexMobile.test(mobileNumber)
    if (!mobileUser)
    {
        mobileError.innerHTML = `لطفا شماره تلفن درست وارد کنید`
    }
    else 
        mobileError.innerHTML = ``
}

function checkPass (password)
{
    const passUser = regexPassword.test(password)
    if (!passUser)
    {
        passError.innerHTML = `پسورد شما باید شامل (۸ کاراکتر ـ حروف کوچک و بزرگ انگلیسی ـ اعداد ـ و اشکال باشد)`
    }
    else 
    {        
        passError.innerHTML = ``
    }
}

function revel() {
    
    if (formInputPass.type === "password") {
        formInputPass.type = "text";
    } else {
        formInputPass.type = "password";
    }
  }