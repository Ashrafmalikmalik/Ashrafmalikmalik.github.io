import React, { useRef } from 'react';
import Home from './Home';

function Ref() {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("emailData")
    const getpassword = localStorage.getItem("passwordData")
    const handelSubmit = () => {
        if (email.current.value == "abc@gmail.com" && password.current.value == "12348") {
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "12348")
        }
    }
    return (
        <div className='card'>
            {
                getEmail && getpassword ?
                    <Home /> :
                    <form on onSubmit={handelSubmit}>
                        <div>

                            <input type='email' ref={email} placeholder='enter email id' />
                        </div>

                        <div>
                            <input type='password' ref={password} placeholder='enter password' />
                        </div>

                        <button> login</button>
                    </form>
            }
        </div>
    )
}

export default Ref