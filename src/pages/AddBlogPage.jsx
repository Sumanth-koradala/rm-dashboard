import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddBlogPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            setError('All fields are required!');
            return;
        }

        navigate('/dashboard');
    };

    return (
        <Container className='my-5 pt-5'>
            <h2>Add New Blog</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="blogTitle">
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="blogContent" className="mt-3">
                    <Form.Label>Blog Content</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Add Blog
                </Button>
            </Form>
        </Container>
    );
};

export default AddBlogPage;
