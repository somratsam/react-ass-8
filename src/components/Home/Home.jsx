import React, { useEffect, useState } from 'react';

import BlogCart from '../BlogCart/BlogCart';

const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='blog-container'>
            {
                blogs.map((blog) => (<BlogCart
                    key={blog.id}
                    blog={blog}></BlogCart>))
            }
        </div>
    );
};

export default Home;