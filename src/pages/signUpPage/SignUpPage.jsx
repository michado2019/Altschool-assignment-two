import React from 'react'
import './SignUpPage.css'
export default function SignUpPage() {
  return (
    <div className='signUpPage-wrapper'>
        <form className='signUpPage-wrapper_form'>
          <input type='text' placeholder='Enter firstname' className='signUpPage-form_input' />
          <input type='text' placeholder='Enter lastname' className='signUpPage-form_input' />
          <input type='email' placeholder='Email' className='signUpPage-form_input' />
          <input type='password' placeholder='Choose password' className='signUpPage-form_input' />
          <button className='signUpPage-btn'>Sign up</button>
          <small>Forgot password?
          <a href='#'>Click here</a>
          </small>
        </form>
    </div>
  )
}
