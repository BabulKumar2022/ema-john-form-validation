import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'



const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }
    // const handleErrorBlur = event=> {
    //     setError(event.target.value);
    // }
    const  handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your password did not match confirm password');
            return;
        }
    }
     
    return (
              <div className='form-container'>
            <div className="">
                <form onSubmit={handleCreateUser}>
                <h3 className='form-title'>Sign Up</h3>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' placeholder='enter your email'  required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password" >Password</label>
                    <input onBlur={handlePasswordBlur}  type="password"  name="password " id="" placeholder='Password' required/>
                </div>
                <div className="input-group">
                    <label htmlFor="conform-password" >Conform Password</label>
                    <input onBlur={handleConfirmPassword} type="password"  name="password " id="" placeholder='conform-Password' required/>
                </div>
                <p style={{color:"red"}}> {error}</p>
                    <input className='form-submit' type="submit" value="Sign Up"/>
                </form>
                <p> Already have an account ? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;