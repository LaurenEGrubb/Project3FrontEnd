import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

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
    <div>
      <div>
        <form className="col" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="myemail@email.com"
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
