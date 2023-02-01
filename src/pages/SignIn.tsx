import React from 'react';
import { Link } from 'react-router-dom';
import '../signIn.scss';



const SignIn: React.FC = () => {
    return (
        <div className="sign-in-wrapper">
            <Link to={'/'}>
                <img src="./assets/logo.svg" alt="" />

            </Link>
            <div className="box">
                <h1>Login</h1>
                <input placeholder="Email address" className="input-email" type="text" />
                <input placeholder="Password" className="input-password" type="text" />
                <button>Login to your account</button>
                <p> Don’t have an account?
                    <Link to={'/signUp'}>Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default SignIn;