'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../lib/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='container'>
      <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <h2>Login</h2>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          
          <div className='form-group'>
            <label>Password</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type='submit' className='btn-primary' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{ marginTop: '1rem' }}>
          Don't have an account? <a href='/register'>Register here</a>
        </p>
      </div>
    </main>
  );
}
