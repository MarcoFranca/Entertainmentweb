import React from "react";
import {Link} from "react-router-dom";

export default function Singnup() {
    return (
        <form>
            <img src="" alt=""/>
            <h1>Sign Up</h1>

            <input type="email" placeholder="Email address"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Repeat password"/>

            <button>Create an account</button>

            <p> Already have an account? <Link to="/"> Login</Link></p>

        </form>
    )
}