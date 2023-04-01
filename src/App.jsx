import React, { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ReactBlog from './components/ReactBlog/ReactBlog';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
    setBookmarkCount(bookmarkCount + 1);
    setBookmarkedTitles([...bookmarkedTitles, title]);
  };

  return (
    <div className="App">
      <div className="header m-auto mb-3 container">
        <Header></Header>
      </div>
      <div className="container d-flex">
        <div className="home-container container">
          <Home
            handleReadTime={handleReadTime}
            handleBookmarkClick={handleBookmarkClick}
            bookmarkedTitles={bookmarkedTitles}
          ></Home>
        </div>
        <div className="container">
          <div>
            <Sidebar
              readTime={readTime}
              bookmarkCount={bookmarkCount}
              bookmarkedTitles={bookmarkedTitles}></Sidebar>

          </div>

          <div className='container pt-3'>
            <ReactBlog></ReactBlog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

