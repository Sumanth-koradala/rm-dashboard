import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-12">
                    <h1>Welcome to the Product Dashboard</h1>
                    <p>This is a simple product dashboard application.</p>
                    <div>
                        <Button className="btn btn-primary m-2" as={Link} to="/login">Login</Button>
                        <Button className="btn btn-secondary m-2">Signup</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;