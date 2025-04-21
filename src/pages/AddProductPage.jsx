import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddProductPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !price || !description) {
            setError('All fields are required!');
            return;
        }

        navigate('/dashboard');
    };

    return (
        <Container className='my-5 pt-5'>
            <h2>Add New Product</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter product name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="productPrice" className="mt-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter product price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="productDescription" className="mt-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter product description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Add Product
                </Button>
            </Form>
        </Container>
    );
};

export default AddProductPage;
