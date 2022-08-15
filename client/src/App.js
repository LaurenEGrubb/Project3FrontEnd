import './App.css'
import { Nav } from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NewPost from './pages/NewPost'
import { Settings } from './pages/Settings'
function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const logOut = () => {
    setUser(null)
    setAuthenticated(false)
    localStorage.clear()
  }

  const checkStatus = async () => {
    const user = await CheckSession()
    setUser(user)
    setAuthenticated(true)
  }

  useEffect(() => {
    const status = localStorage.getItem('token')
    if (status) {
      checkStatus()
    }
  }, [])

  return (
    <div className="app">
      <header>
        <Nav authenticated={authenticated} user={user} logOut={logOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/post" element={<NewPost user={user} />} />
          <Route path="/settings" element={<Settings user={user} />} />

          <Route
            path="/login"
            element={
              <Login setUser={setUser} setAuthenticated={setAuthenticated} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/feed"
            element={<Feed user={user} authenticated={authenticated} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
