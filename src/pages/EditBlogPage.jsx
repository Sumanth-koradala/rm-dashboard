import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlogPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchedBlog = { id, title: 'Blog Post 1', content: 'This is blog post content.' };
        setTitle(fetchedBlog.title);
        setContent(fetchedBlog.content);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !content) {
            alert('All fields are required!');
            return;
        }

        navigate('/dashboard');
    };

    return (
        <Container className='my-5 pt-5'>
            <h2>Edit Blog</h2>
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
                    Update Blog
                </Button>
            </Form>
        </Container>
    );
};

export default EditBlogPage;
