import React from 'react';
import './App.css';

function LoginComponent () {
    return (
        <div className="Loginpage">
            
            <h3 className="SigninHeader">SignIn</h3>
            <form>
                <p>Username</p>
                <input type="text/email" />
                <p>Password</p>
                <input type="password"/>
            </form>
        </div>

    );
}

export default LoginComponent;