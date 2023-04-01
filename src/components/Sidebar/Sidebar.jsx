
import React from 'react';

const Sidebar = ({ readTime, bookmarkCount, bookmarkedTitles }) => {
  return (
    <div className='container'>
      <div className="text-center  text-info shadow-5">
        <h4>Spent time on read : {readTime} </h4>
      </div>
      <div className="fw-bold text-center mt-3">
        Bookmarked blog : {bookmarkCount}
      </div>
      {bookmarkedTitles.map((title, index) => (
        <div key={index} className="fw-bold text-center mt-3">
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
