import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import SideCart from './components/sideCart/SideCart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header m-auto mb-3 container">
        <Header></Header>
      </div>
      <div className="main-section d-flex container">
        <div className="home-container col-md-8">
          <Home></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart></SideCart>
        </div>
      </div>

    </div>
  )
}

export default App
