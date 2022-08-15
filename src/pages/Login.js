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
    <div class='container'>
      <div class='segment'>
        <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="segment">
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
          <div className="segment">
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

        <div class="poloroids">
            <div class="poloroid poloroid-1"></div>
            <div class="poloroid poloroid-2"></div>
            <div class="poloroid poloroid-3"></div>
            <div class="poloroid poloroid-4"></div>
            <div class="poloroid poloroid-5"></div>
        </div>
      </div>
    </div>
  )
}

export default Login
