import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const BlogList = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'Blog Post 1', content: 'Content for blog post 1' },
        { id: 2, title: 'Blog Post 2', content: 'Content for blog post 2' },
    ]);

    const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    };

    return (
        <div>
            <h3>Blog List</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            <td>
                            <Button variant="warning" as={Link} to={`/edit-blog/${blog.id}`}>Edit</Button>
                            <Button variant="danger" onClick={() => deleteBlog(blog.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default BlogList;
