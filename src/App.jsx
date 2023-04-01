import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ReactBlog from './components/ReactBlog/ReactBlog';
import {toast, ToastContainer} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [readTime, setReadTime] = useState(0);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [bookmarkedTitles, setBookmarkedTitles] = useState([]);
 

  const handleReadTime = (time) => {
    const total = readTime + time;
    setReadTime(total);
  };

  const handleBookmarkClick = (title) => {
      toast.warn('Already bookmarked!')
    
    setBookmarkCount(bookmarkCount + 1);
    setBookmarkedTitles([...bookmarkedTitles, title]);
  };

  return (
    <div className="App">
      <div className="container mb-3 ">
        <Header></Header>
      </div>
      <div className="container d-flex">
        <div className="home-container row">
          <Home
            handleReadTime={handleReadTime}
            handleBookmarkClick={handleBookmarkClick}
            bookmarkedTitles={bookmarkedTitles}
          ></Home>
        </div>
        <div>
          <div>
            <Sidebar
              readTime={readTime}
              bookmarkCount={bookmarkCount}
              bookmarkedTitles={bookmarkedTitles}></Sidebar>

          </div>

          <div className= 'pt-3'>
            <ReactBlog></ReactBlog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;




