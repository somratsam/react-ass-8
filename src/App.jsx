import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import SideCart from './components/sideCart/SideCart';

function App() {
  const [readTime, setReadTime] = useState("")
  const handleReadTime = (time) => {
   const previousReadTime =(localStorage.getItem("readTine"))
   if (previousReadTime) {
    // const sum = previousReadTime + time
    // localStorage.setItem("readTime", sum)
    const total = previousReadTime + time
    localStorage.setItem("readTime", total )
    setReadTime(total)
   }
   else{
    localStorage.setItem("readTime", time)
    setReadTime(time)
   }
  }

  return (
    <div className="App">
      <div className="header m-auto mb-3 container">
        <Header></Header>
      </div>
      <div className="main-section d-flex container">
        <div className="home-container col-md-8">
          <Home handleReadTime = {handleReadTime}></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart readTime = {readTime}></SideCart>
        </div>
      </div>

    </div>
  )
}

export default App
