"use client"; // This is a client component 👈🏽
import { signIn } from 'next-auth/react';
import { useState, useEffect } from "react";
import "../../styles/layout/login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleLoginUser = async () => {
        await signIn('credentials', {
            name, password, redirect: true, callbackUrl: "/DashBoard"
        });
    };
    return (
        <div className="login">
            <div className="login--form">
                <div className="login--form__title">SIOT SYSTEM</div>
                <div className="login--form__input">
                    <div className="input--user">
                        <input className="input name"
                            onChange={e => setName(e.target.value)}
                            value={name} type="text"
                            placeholder="user name" />
                        <div className="errName err"></div>
                    </div>
                    <div className="input--password">
                        <input
                            type="password"
                            className="input password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="errPass err"></div>
                    </div>
                </div>
                <div className="login--form__submit">
                    <div className="submit--login">
                        <button className="btn accept" onClick={handleLoginUser}>LOGIN</button>
                    </div>
                    <div className="submit--create">or create new account</div>
                </div>
            </div>
        </div>
    );
}
export default Login;