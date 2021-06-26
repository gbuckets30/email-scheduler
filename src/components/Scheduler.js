import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Scheduler() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <Card className='w-100'>
        <Card.Body>
          <h2 className='text-center mb-4'>Scheduler</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to='/history' className='btn btn-primary w-100 mt-2'>
            See History
          </Link>
        </Card.Body>
        <div className='w-100 text-center mt-2'>
          <Button variant='link' onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Card>
    </>
  );
}
