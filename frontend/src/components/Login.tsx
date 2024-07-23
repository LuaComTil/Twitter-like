import React, { useState } from 'react';
import styled from 'styled-components';
import axios from '../services/axiosConfig';
import { useAuth } from '../Context/AuthContext';

const Overlay = styled.div<{ $visible: boolean }>`
  display: ${props => (props.$visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoginContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  max-width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

interface LoginProps {
  visible: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ visible, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/login', {
        username,
        password,
      });
      login(response.data.accessToken);
      console.log(response)
      onClose();
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to login. Please check your credentials and try again.');
    }
  };

  return (
    <Overlay $visible={visible}>
      <LoginContainer>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button type="submit">Login</Button>
        </Form>
      </LoginContainer>
    </Overlay>
  );
};

export default Login;
