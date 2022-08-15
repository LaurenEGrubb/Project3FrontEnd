import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const initialFormState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleChange = (error) => {
    setFormValues({ ...formValues, [error.target.name]: error.target.value })
  }

  const handleSubmit = async (error) => {
    error.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      username: formValues.lastName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialFormState)
    navigate('/login')
  }

  return (
    <div>
      <div>
        <form className="col" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="John"
              value={formValues.firstName}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Appleseed"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="username"
              value={formValues.username}
              required
            />
          </div>
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
          <div className="form-wrap">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register