import { UpdatePassword } from '../services/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Settings = () => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    oldPassword: '',
    newPassword: ''
  })
  const [showForm, setShowFrom] = useState(false)

  const handleChange = (error) => {
    setFormValues({ ...formValues, [error.target.name]: error.target.value })
  }
  const toggleShowForm = () => {
    setShowFrom(!showForm)
  }

  const handleSubmit = async (error) => {
    error.preventDefault()
    const payload = await UpdatePassword(formValues)
    setFormValues({ email: '', password: '', oldPassword: '' })
    navigate('/settings')
    toggleShowForm()
  }

  return (
    <div>
    <div class='pagewrap'>
        <h1>Settings</h1>
            {!showForm && (
              <button className="hoverbutton" onClick={toggleShowForm}>
                Change Password?
              </button>
            )}
              <button className="deletebutton">Delete Your Account?</button>
            {showForm && (
              <form className="settingbox" onSubmit={handleSubmit}>
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
                  <label htmlFor="oldPassword">Old Password</label>
                  <input
                    onChange={handleChange}
                    name="oldPassword"
                    type="password"
                    value={formValues.password}
                    required
                  />
                </div>
                <div className="form-wrap">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    onChange={handleChange}
                    name="newPassword"
                    type="password"
                    value={formValues.password}
                    required
                  />
                </div>
                <button
                  class="dropdownbutton"
                  disabled={
                    !formValues.email ||
                    !formValues.oldPassword ||
                    !formValues.newPassword
                  }
                >
                  Confirm
                </button>
              </form>
            )}
          
      
      </div>
    </div>
  )
}
