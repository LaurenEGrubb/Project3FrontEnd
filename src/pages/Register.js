import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  let navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profilePicture, setProfilePicture] = useState('')

  // const [formValues, setFormValues] = useState({ initialFormState })
  // const handleChange = (error) => {
  //   setFormValues({ ...formValues, [error.target.name]: error.target.value })
  // }
  const handleSubmit = async (error) => {
    error.preventDefault()
    const formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('username', username)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('profilePicture', profilePicture)
    await RegisterUser(formData)
    // setFormValues(initialFormState)
    navigate('/login')
  }
  return (
    <div>
      <div class="register">
        <h1>Register</h1>
        <form className="col" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <label htmlFor="profilePicture">Add Profile Picture URL</label>
            <input
              onChange={(e) => setProfilePicture(e.target.files[0])}
              name="profilePicture"
              type="file"
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
              type="text"
              placeholder="John"
              value={firstName}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
              type="text"
              placeholder="Appleseed"
              value={lastName}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              type="text"
              placeholder="username"
              value={username}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="myemail@email.com"
              value={email}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              value={password}
              required
            />
          </div>
          <div className="form-wrap">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              required
            />
          </div>
          <button
            disabled={!email || (!password && confirmPassword === password)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
export default Register
