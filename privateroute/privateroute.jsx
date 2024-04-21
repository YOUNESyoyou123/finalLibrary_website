import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const storedRole = window.localStorage.getItem('role');
    setRole(storedRole);
    setIsAuthenticated(!!storedRole);
    setIsLoading(false); // Set loading to false after retrieval
  }, []);

  return isLoading ? (
    <div>Loading...</div> // Show loading indicator while role is fetched
  ) : isAuthenticated ? (
    role === 'admin' ? <Component /> : <Navigate to="/" />
  ) : (
    <Navigate to="/" />
  );
};


export default PrivateRoute;
