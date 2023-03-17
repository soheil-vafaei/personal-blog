const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

const regexPhoneIR = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/

const formSubmit = document.getElementById('form')
const formInput = document.getElementById('inputForm')
const Error_ = document.getElementById('Error')

formSubmit.addEventListener('submit',(event)=>{
    event.preventDefault()
    checkItEmail(formInput.value)
})

function checkItEmail (inputUser) {
    const _emailUser= regexEmail.test(inputUser)
    const _phoneUser= regexPhoneIR.test(inputUser)
    if (_emailUser)
    {
        Error_.innerHTML = `تبریک شما وارد شدید`
    }
    else if (_phoneUser)
    {
        Error_.innerHTML = `تبریک شما وارد شدید`
    }
    else
    {
        Error_.innerHTML = `اشتباه ایمیل یا شماره تلفن صحیح نیست`
    }
}

