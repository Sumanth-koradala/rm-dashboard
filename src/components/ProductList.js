import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', price: '$10' },
        { id: 2, name: 'Product B', price: '$20' },
        { id: 3, name: 'Product C', price: '$30' },
    ]);

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <h3>Product List</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Button variant="warning" as={Link} to={`/edit-product/${product.id}`}>Edit</Button>
                                <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductList;
