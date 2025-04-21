import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import BlogList from '../components/BlogList';

const DashboardPage = () => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <div className="d-flex justify-content-between mb-3">
                <Button as={Link} to="/add-product" variant="primary">Add Product</Button>
                <Button as={Link} to="/add-blog" variant="success">Add Blog</Button>
            </div>

            <h2>Manage Products</h2>
            <ProductList />

            <h2 className="mt-4">Manage Blogs</h2>
            <BlogList />
        </Container>
    );
};

export default DashboardPage;
