import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../Context/AuthContext';
import axios from '../services/axiosConfig';

const PostContainer = styled.div`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  max-width: 600px;
  margin: 1rem auto;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const PostTweet: React.FC = () => {
  const [content, setContent] = useState('');
  const { isAuthenticated } = useAuth();

  const handlePost = async () => {
    try {
      await axios.post('/tweets', { content });
      setContent('');
    } catch (error) {
      console.error('Failed to create post', error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <PostContainer>
      <h3>Create a Tweet</h3>
      <TextArea
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind ma boi?"
      />
      <Button onClick={handlePost}>Post</Button>
    </PostContainer>
  );
};

export default PostTweet;
