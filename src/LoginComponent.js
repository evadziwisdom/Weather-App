import React from 'react'
import './App.css'

function LoginComponent () {
    return (
        <div>
            <h4>SignIn</h4>
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