import React, { useState } from 'react';
import './App.css';

function LoginComponent () {
    const [ Signin, setSignin] = useState('Signin')
    

    return (
        <div className="Loginpage">
            
            <h3 className="SigninHeader">SignIn</h3>
            <form>
                <p>Username</p>
                <input type="text/email" placeholder="email" />
                <p>Password</p>
                <input type="password" placeholder="password" />
                <button>{Signin}</button>
            </form>
        </div>

    );
}

export default LoginComponent;