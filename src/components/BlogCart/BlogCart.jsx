import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const BlogCart = ({ blog, handleReadTime }) => {

    return (
        <div>
            <Card style={{ width: '45rem' }}>
                <Card.Img variant="top" src={blog.blogImage} />
                <Card.Body>
                    <div className="author-info d-flex justify-content-between">
                        <div className="author d-flex">
                            <div className="author-image"><img style={{ width: '2rem' }} src={blog.authorImage} alt="" /></div>
                            <div className="author-name px-3">
                                <p><strong>{blog.name}</strong></p>
                                <p><small>{blog.date}</small></p>
                            </div>
                        </div>
                        <div className="read-time">
                            <small>Read time:{blog.readTime} <FontAwesomeIcon icon={faBookmark} /></small>
                        </div>
                    </div>
                    <div className="card-title">
                        <p className='fw-bold'>{blog.blogTitle}</p>
                    </div>
                    <p className='text-decoration-underline text-success' onClick={() => handleReadTime(blog.readTime)}>Mark as read</p>
                    
                </Card.Body>
            </Card>
        </div >
    );
};

export default BlogCart;