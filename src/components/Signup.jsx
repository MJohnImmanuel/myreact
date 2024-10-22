import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='sign'>
        <div className='logbg'>
      <h2>Create Account </h2><br/>
      <input className='mb-2'type='text' placeholder=' Name'/><br/>
      <input  className='mb-2' type='email' placeholder=' Email'/><br/>
      <input  className='mb-2' type='phone' placeholder='Phone Number'/><br/>
      <input  className='mb-2' type='password' placeholder='Password'/><br/>
      <Link to="/"><button>Sign-up</button></Link>
      </div>
    </div>
  )
}

export default Signup
