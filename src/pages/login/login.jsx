import React from "react";
import {ButtonRed, LinkStyle, MainLogin, MainLoginForm, MainLoginFormContent} from "./loginStyle";
import movieLogo from "../../assets/images/logo.svg"

export default function Login() {
    return (
        <MainLogin>
            <MainLoginForm>
                <img src={movieLogo} alt=""/>
                <MainLoginFormContent>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email address"/>
                    <input type="password" placeholder="Password"/>
                    <ButtonRed>Login to your account</ButtonRed>
                <p>Don't have an account? <LinkStyle to="./singnup">Sign Up</LinkStyle></p>
                </MainLoginFormContent>
            </MainLoginForm>
        </MainLogin>
    )
}