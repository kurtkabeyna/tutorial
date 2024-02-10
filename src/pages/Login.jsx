import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Validation from './LoginValidation';
import axios from "axios";


const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))

  }

  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
        .then(res => {
          if (res.data === "Success") {
            navigate('/');
          } else {
            alert("No record existed");
          }
        })
        .catch(err => console.log(err));
    }
  }
  return (
    <div>
      <Header />
      <div className='login'>
        <div className='forma'>
          <h1>Login</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className='sbl'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input onChange={handleInput} type='email' name='email' placeholder='Enter Email' className='nameI'></input>
              <span>{errors.email && <span className='text-danger'> {errors.email}</span>}</span>
            </div>
            <div className='sbl'>
              <label htmlFor='password'><strong>Password</strong></label>
              <input onChange={handleInput} name='password' type='password' placeholder='Enter Password' className='passwordI'></input>
              <span>{errors.password && <span className='text-danger'> {errors.password}</span>}</span>

            </div>
            <button type='submit' className='registerB'>Login</button>
            <p>Don't have an account?</p>
            <Link to="/register" className='btn btn-secondary loginI'>Register</Link>
          </form>
        </div>
      </div>
    </div >
  );
}

export default Login;
