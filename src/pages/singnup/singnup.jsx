import React from "react";
import {ButtonRed, LinkStyle, MainSingnup, MainSingnupForm, MainSingnupFormContent} from "./singnupStyle";
import movieLogo from "../../assets/images/logo.svg"

export default function Singnup() {
    return (
        <MainSingnup>
            <MainSingnupForm>
                <img src={movieLogo} alt="movie Logo"/>
                <MainSingnupFormContent>
                <h1>Sign Up</h1>

                <input type="email" placeholder="Email address"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat password"/>

                <ButtonRed>Create an account</ButtonRed>

                <p> Already have an account? <LinkStyle to="/"> Login</LinkStyle></p>
                </MainSingnupFormContent>
            </MainSingnupForm>
        </MainSingnup>
    )
}