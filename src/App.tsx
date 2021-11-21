import React from 'react'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'

const App: React.FC = () => (
   <div className="App">
      <Navbar />
      <Home />
   </div>
)

export default App
