import React, { useState } from 'react';
import './App.css';

function LoginComponent () {
    const [ Signin, setSignin] = useState('Signin')
    console.log(Signin)

    return (
        <div className="Loginpage">
            
            <h3 className="SigninHeader">SignIn</h3>
            <form>
                <p>Username</p>
                <input type="text/email" />
                <p>Password</p>
                <input type="password"/>
                <button>{Signin}</button>
            </form>
        </div>

    );
}

export default LoginComponent;