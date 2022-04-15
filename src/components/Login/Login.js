import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'




const Login = () => {
    return (
        <div className='form-container'>
            <div className="">
                <form action="">
                <h3 className='form-title'>Login</h3>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='enter your email' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password"  name="password " id="" placeholder='Password' required/>
                </div>
                    <input className='form-submit' type="submit" value="Login"/>
                </form>
                <p>New to am-john ? <Link className='form-link' to='/signup'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;