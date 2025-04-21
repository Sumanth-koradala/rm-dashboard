import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AddProductPage from './pages/AddProductPage';
import AddBlogPage from './pages/AddBlogPage';
import EditProductPage from './pages/EditProductPage';
import EditBlogPage from './pages/EditBlogPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<DashboardPage />} />}
          />
          <Route
            path="/add-product"
            element={<PrivateRoute element={<AddProductPage />} />}
          />
          <Route
            path="/edit-product/:id"
            element={<PrivateRoute element={<EditProductPage />} />}
          />
          <Route
            path="/add-blog"
            element={<PrivateRoute element={<AddBlogPage />} />}
          />
          <Route
            path="/edit-blog/:id"
            element={<PrivateRoute element={<EditBlogPage />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
