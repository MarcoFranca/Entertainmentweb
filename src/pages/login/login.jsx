import React from "react";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <>
            <form>
                <img src="" alt=""/>
                <h1>Login</h1>

                <input type="email" placeholder="Email address"/>
                <input type="password" placeholder="Password"/>

                <button>Login to your account</button>

                <p>Don't have an account? <Link to="./singnup">Sign Up</Link></p>

            </form>
        </>
    )
}