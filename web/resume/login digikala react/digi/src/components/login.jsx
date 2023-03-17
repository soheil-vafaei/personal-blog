import { useState } from 'react'
import './login.css'

const regexPhoneIr = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const Login = ()=>{
    const [inpuVal, setInputVal] = useState('')

    function checkItInput () {
        const _emailUser= regexEmail.test(inpuVal)
        const _phoneUser= regexPhoneIr.test(inpuVal)

        if (_emailUser || _phoneUser)
        {
            return `شماره تلفن یا ایمیل شما استاندارد است :)`
        }
        else if(inpuVal.length == 0)
        {
            return `لطفا این قسمت رو خالی نزارید`
        }
        else
        {
            return `شماره تلفن یا ایمیل صحیح نمیباشد لطفا دوباره امتحان کنید`
        }
    }

    return (
        <dev className='cont' dir="rtl">
            <dev className='container'>
                <dev className='container-login'>
                    <dev className='imgHead'>
                        <img src="https://www.digikala.com/statics/img/svg/logo.svg"/>
                    </dev>
                    <dev className='tagLogin'>
                        <p>ورود | ثبت نام</p>
                    </dev>
                    <dev className='disLogin'>
                        <p>سلام لطفا شماره تلفن یا ایمیل خود را وارد کنید</p>
                    </dev>
                    <dev className='inputLogin'>
                        <input value={inpuVal} onChange={(event) => {setInputVal(event.target.value)}}></input>
                    </dev>
                    <dev className='alertLogin'>
                        <p>{checkItInput()}</p>
                    </dev>
                    <dev className='buttonLogin'>
                        <button type="submit">ورود</button>
                        
                    </dev>
                </dev>
            </dev>
        </dev>
    )
}

export default Login