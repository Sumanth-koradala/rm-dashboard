import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const EditProductPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchedProduct = { id, name: 'Product A', price: '$10', description: 'This is product A.' };
        setName(fetchedProduct.name);
        setPrice(fetchedProduct.price);
        setDescription(fetchedProduct.description);
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !price || !description) {
            alert('All fields are required!');
            return;
        }

        navigate('/dashboard');
    };

    return (
        <Container className='my-5 pt-5'>
            <h2>Edit Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="productPrice" className="mt-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="productDescription" className="mt-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Update Product
                </Button>
            </Form>
        </Container>
    );
};

export default EditProductPage;
