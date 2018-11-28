import React from 'react'
import './Field.scss'

const Field = ({label, placeholder, id}) => {
   return (
      <div className="login-form_field">
         <label className="login-form_text" htmlFor={id}>{label}</label>
         <input id={id} className="login-form_input" type="text" placeholder={placeholder}/>
      </div>
   )
}

export default Field
