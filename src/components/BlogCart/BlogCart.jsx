import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BlogCart = ({ blog }) => {

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
                            10 min 45 sec
                        </div>
                    </div>


                 <div className="card-title">
                    <p className='fw-bold'>{blog.blogTitle}</p>
                 </div>
                <Button variant="primary">Mark as unread</Button>
            </Card.Body>
        </Card>
        </div >
    );
};

export default BlogCart;