//import './styles/App.css'
import { Nav } from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

function App() {
  return (
    <div className="app">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
