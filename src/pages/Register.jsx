import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Validation from './RegisterValidation';
import axios from "axios";

const Register = () => {

  const [values, setValues] = useState({
    name: '',
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
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/register', values)
        .then(res => {
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }


  return (
    <div>
      <Header />
      <div className='register'>
        <div className='forma'>
          <h1>Register</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className='sbl'>
              <label htmlFor='name'><strong>Name</strong></label>
              <input onChange={handleInput} name='name' type='name' placeholder='Enter Name' className='nameI'></input>
              <span>{errors.name && <span className='text-danger'> {errors.name}</span>}</span>
            </div>
            <div className='sbl'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input onChange={handleInput} name='email' type='email' placeholder='Enter Email' className='nameI'></input>
              <span>{errors.email && <span className='text-danger'> {errors.email}</span>}</span>
            </div>
            <div className='sbl'>
              <label htmlFor='password'><strong>Password</strong></label>
              <input onChange={handleInput} name='password' type='password' placeholder='Enter Password' className='passwordI'></input>
              <span>{errors.password && <span className='text-danger'> {errors.password}</span>}</span>
            </div>
            <button className='registerB'>Register</button>
            <p>Already have an account?</p>
            <Link to="/login" className='btn btn-secondary loginI'>Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
