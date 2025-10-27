import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Validation from './loginvalidation';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // function handlesubmit(event){
    //     event.preventDefault();
    //     console.log(email);
    const [values, setValues] = useState({

email: '',

password:''

})

const navigate = useNavigate();
const [errors, setErrors] = useState({})

const handleInput = (event) => {

setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

}

const handleSubmit =(event) => {

event.preventDefault();

setErrors (Validation(values));
if( errors.email === "" && errors.password === ""){
    axios.post('https://backend-1-01zs.onrender.com/login', values)
    .then(res =>{
        if(res.data === "Success"){
            navigate('/home');
        }else{
            alert("record not exists");
        }
})
    .catch(err => console.log(err));

}
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary container mt-5">
      <div className='p-3 bg-white w-25'>
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor='email'>Email</label>
          {/* <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/> */}
          <input type="email" className="form-control rounded-0" placeholder="Enter email" onChange={handleInput}  name='email'/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}

        </div>
        <div className="mb-3">
          <label htmlFor='password'>Password</label>
          <input type="password" className="form-control rounded-0" placeholder="Enter password" onChange={handleInput} name = "password"/>
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
        <p className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Don't have an account? <Link to="/signUp" >Register</Link></p>
        
          
      </form>
      </div>
    </div>
  );
}

export default Login;
