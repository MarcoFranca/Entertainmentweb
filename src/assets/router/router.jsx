import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../pages/home/home";
import PageNotFound from "../../pages/error/pageNotFound";
import Login from "../../pages/login/login";
import Singnup from "../../pages/singnup/singnup";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/singnup" element={<Singnup/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}