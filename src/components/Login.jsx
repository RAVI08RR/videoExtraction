import React from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  const styles = {
    mainContainer: {
      // background: 'linear-gradient(135deg, #1a3a4a 0%, #0088cc 100%)',
      backgroundImage: `url('/login-bg.png')`,
      backgroundSize: 'cover',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      padding: '1rem'
    },
    backgroundPattern: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 25h100M0 50h100M0 75h100' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
      opacity: '0.1'
    },
    card: {
      maxWidth: '500px',
      width: '100%'
    },
    title: {
      color: '#1a3a4a',
      fontWeight: '600'
    },
    subtitle: {
      color: '#1a3a4a'
    },
    description: {
      fontSize: '0.9rem'
    },
    loginButton: {
      backgroundColor: '#1a3a4a',
      border: 'none',
      transition: 'background-color 0.3s'
    }
  };

  return (
    <div style={styles.mainContainer} >
      {/* Background Pattern */}
      <div style={styles.backgroundPattern} />

      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Card className="shadow-lg" style={styles.card}>
          <Card.Body className="p-5">
            <div className="text-center mb-4">
              <h1 className="mb-2" style={styles.title}>VACF</h1>
              <p className="text-muted mb-1">Video Analytics on CCTV Video Feeds</p>
            </div>

            <h2 className="text-center mb-2" style={styles.subtitle}>ADMIN LOGIN</h2>
            <p className="text-center text-muted mb-4" style={styles.description}>
              Cybercrime Investigation Support, Analysis and Monitoring System
            </p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter User Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="w-100 py-2"
                style={styles.loginButton}
              >
                LOGIN
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Login;