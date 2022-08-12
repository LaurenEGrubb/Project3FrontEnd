import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

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
    initialFormState()
  }

  return (
    <div>
      <div>
        <form className="col" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="Mr"
              value={formValues.firstName}
              reuqired
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
