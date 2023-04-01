import React, { useEffect, useState } from 'react';
import BlogCart from '../BlogCart/BlogCart';

const Home = ({ handleReadTime, handleBookmarkClick, bookmarkedTitles }) => {
   
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blog.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="home-container">
      {blogs.map((blog) => (
        <BlogCart
          handleReadTime={handleReadTime}
          handleBookmarkClick={handleBookmarkClick}
          bookmarkedTitles={bookmarkedTitles}
          key={blog.id}
          blog={blog}
        ></BlogCart>
      ))}
    </div>
  );
};

export default Home;
