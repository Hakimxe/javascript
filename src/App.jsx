import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main-content">
      <div className="card">
        <h2>Welcome to RentCar SaaS</h2>
        <p>
          Your complete solution for modern car rental management. Streamline your
          operations, manage your fleet, and provide exceptional service to your customers.
        </p>
        <button className="btn">Get Started</button>
      </div>

      <div className="container">
        <div className="features">
          <div className="feature-item">
            <h3>🚗 Fleet Management</h3>
            <p>Efficiently manage your entire vehicle fleet with real-time tracking and maintenance scheduling.</p>
          </div>
          <div className="feature-item">
            <h3>📊 Analytics Dashboard</h3>
            <p>Get insights into your business with comprehensive analytics and reporting tools.</p>
          </div>
          <div className="feature-item">
            <h3>💳 Payment Processing</h3>
            <p>Secure and seamless payment processing with multiple payment gateway integrations.</p>
          </div>
          <div className="feature-item">
            <h3>📱 Mobile Ready</h3>
            <p>Fully responsive design that works perfectly on all devices and screen sizes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="main-content">
      <div className="card">
        <h2>About RentCar SaaS</h2>
        <p>
          RentCar SaaS is a cutting-edge platform designed to revolutionize the car rental industry.
          Built with modern technologies and best practices, we provide a comprehensive solution
          for rental businesses of all sizes.
        </p>
        <p>
          Our mission is to simplify car rental operations while maximizing efficiency and
          customer satisfaction.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div id="root">
        <header className="header">
          <div className="container">
            <h1>🚗 RentCar SaaS</h1>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2025 RentCar SaaS. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
