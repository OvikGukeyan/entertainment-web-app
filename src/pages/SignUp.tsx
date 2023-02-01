import React from 'react';
import '../signIn.scss';
import { Link } from 'react-router-dom';



const SignUp: React.FC = () => {
    return (
        <div className="sign-in-wrapper">
            <Link to={'/'}>
                <img src="./assets/logo.svg" alt="" />
            </Link>
            <div className="box">
                <h1>Sign Up</h1>
                <input placeholder="Email address" className="input-email" type="text" />
                <input placeholder="Password" className="input-password" type="text" />
                <input placeholder="Repeat password" className="input-password" type="text" />
                <button>Create an account</button>
                <p> Already have an account? <Link to="/signIn">Login</Link></p>
            </div>
        </div>
    )
}

export default SignUp