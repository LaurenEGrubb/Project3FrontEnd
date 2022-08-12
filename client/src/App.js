//import './styles/App.css'
import { Nav } from './components/Nav'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <header>
        <Nav />
      </header>
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
