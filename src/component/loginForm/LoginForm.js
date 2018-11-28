import React from 'react'
import './LoginForm.scss'
import './fonts.scss'
import Field from "../Field/Field";
import logo from './logo.png'

const form = () => {
    return (
        <div className="login-form_wrap">
             <form className="login-form">
                <img src={logo} width="210" height="40" className="login-form_logo"/>
                <Field label="Логин" placeholder="" id="login"/>
                <Field label="Пароль" placeholder="" id="password"/>
                <button type="submit" className="login-form_button">Войти</button>
            </form>
        </div>
    )
}

export default form