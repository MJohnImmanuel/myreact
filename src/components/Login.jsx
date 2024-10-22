import React from 'react'
import '../App.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function login() {
  return (
    <><div className="login">
      <div className='logbg'>
        <h2>Login</h2><br />
        <input className='mb-2' type='email' placeholder='Email' /><br />
        <input className='mb-3' type='password' placeholder='Password' /><br />
        <Link to="dashboard"><button>Login<ArrowForwardIcon style={{fontSize: 15}}/></button><br/></Link>


          <div className="float-center pt-2">
             <p className="g-0">You Don't Have Account?  <Link to="/Signup" style={{textDecoration:'none'}}><span className='signup'> Sign up </span> </Link></p> 
          </div>
      
      </div>
      
    </div>
    
    
    </>
  )
}

export default login
