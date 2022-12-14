import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import react from 'react'
import '../styles/App.css'
const Login = ({ setUser, setAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const handleChange = (error) => {
    setFormValues({ ...formValues, [error.target.name]: error.target.value })
  }
  const handleSubmit = async (error) => {
    error.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    setAuthenticated(true)
    navigate('/feed')
  }
  return (
    <div className='pagewrap'>
    <div class='container'>
      <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap' rel="App.css"></link>
       <div class='login'>
        <h1>Welcome Back</h1>
        </div>
        <form className="loginform"onSubmit={handleSubmit}>
          <div className="form-wrap">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email Address"
              value={formValues.email}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder='Password'
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Login
          </button>
        </form>
    </div>
    </div>
  )
}
export default Login