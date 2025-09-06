import React from 'react'
import { Link } from '@inertiajs/react'
import axios from 'axios';

const Register = () => {

return (
  <div className='register-container'>
    <form className='form-container '>
        <Link prefetch href='/'>
        <button className='btn-back '>
          <i className="fa-solid fa-arrow-left "></i> Back
        </button>
        </Link>

      <h1 className='form-title' >Register</h1>
      <div className='input-box'>
        <input type="text" placeholder='Username' required />
      </div>
      <div className='input-box'>
        <input  type="email" placeholder='Email' required />
      </div>
      <div className='input-box'>
        <input type="password" placeholder='Password' required />
      </div>
      <div className='input-box'>
        <input type="password" placeholder='Confirm Password' required />
      </div>
      <button className='btn'>Register</button>
      <p className='footer'>Already have an account? <Link className='touch' prefetch href={route('signin')}>Login</Link></p>
    </form>
  </div>
  )
}
export default Register;
