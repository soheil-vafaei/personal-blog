import { useState } from 'react'
import './login.css'

const regexPhoneIr = /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const [inpuVal, setInputVal] = useState;

function Login()
{
    return (
        <>
            <dev className='container'>
                <dev className='container-login'>
                    <dev className='logo'>
                        <img src="https://www.digikala.com/statics/img/svg/logo.svg" alt="logo digikala" />
                    </dev>
                    <dev className='tag-log'>
                        <h1>ورود | ثبت نام</h1>
                    </dev>
                    <dev className='dis-log'>
                        <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                    </dev>
                    <dev className='input-login'>
                        <input value={inputVal} onChange={(e) =>{setInputVal ( e.target.value)}} />
                    </dev>
                    <dev className='Errorm'>
                        <p></p>
                    </dev>
                    <dev className='login'>
                        <button type='submit'>ورود</button>
                    </dev>
                    
                </dev>
            </dev>
        </>
    )
}

export default Login