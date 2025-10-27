import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Validation from './signupvalidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [values, setValues] = useState({
name: '',   

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
if(errors.name === "" && errors.email === "" && errors.password === ""){
    axios.post('https://backend-1-01zs.onrender.com/signup', values)
    .then(res =>
        navigate('/login')
    )
    .catch(err => console.log(err));

}
    }
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary container mt-5">
      <div className='p-3 bg-white w-25'>
      <h2>Register</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor='name'>Name</label>
          <input type="text"  onChange={handleInput}  className="form-control rounded-0" name = 'name'placeholder="Enter email"  />
          {errors.name && <span className='text-danger'>{errors.name}</span>}
        </div>
        <div className="mb-3 ">
          <label htmlFor='email'>Email</label>
          <input type="email"  onChange={handleInput}  name='email' className="form-control rounded-0" placeholder="Enter email"  />
          
          {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor='password'>Password</label>
          <input type="password"  onChange={handleInput}  name='password' className="form-control rounded-0" placeholder="Enter password(min of 6 char)" />
          {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">Sign in</button>
        <p className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Have an account? <Link to="/login"  >Login</Link></p>
      </form>
      </div>
    </div>
  )
}

export default SignUp
