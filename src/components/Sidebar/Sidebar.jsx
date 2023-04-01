
import React from 'react';

const Sidebar = ({ readTime, bookmarkCount, bookmarkedTitles }) => {
    console.log(bookmarkedTitles);
  return (
    <div>
      <div className="text-center  text-info shadow-5">
        <h3>Spent time on read : {readTime} </h3>
      </div>
      <div className="fw-bold text-center mt-3">
        Bookmarked blog : {bookmarkCount}
      </div>
      {bookmarkedTitles.map((title,index) => (
        <div key={index} className="fw-bold text-center mt-3">
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
