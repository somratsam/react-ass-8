import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';

import ReactBlog from './components/ReactBlog/ReactBlog';
import CalculateArea from './components/CalculateArea/CalculateArea';


function App() {
  const [readTime, setReadTime] = useState(0)

  const handleReadTime = (time) => {
    console.log(time);
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"))

    if (previousReadTime) {
      const total = previousReadTime + time
      localStorage.setItem("readTime", total)

      setReadTime(total)
    }
    else {
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
        <div className="home-container container">
          <Home handleReadTime={handleReadTime}></Home>
        </div>
        <div className='container'>
          <CalculateArea readTime={readTime}></CalculateArea>
        </div>

      </div>
      <div className='container'>
        <ReactBlog></ReactBlog>
      </div>

    </div>
  )
}

export default App
