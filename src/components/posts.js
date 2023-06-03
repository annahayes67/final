import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import maxine from './images/maxine.jpeg';
import './posts.css';
import NavBar from './navbar';

const initialPosts = [
  {
    id: 1,
    title: 'Seeing the world from our cats perspective.',
    picture: maxine,
    date: '05/27/2023',
  },
];

function Blog() {

  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({
    id: initialPosts.length + 1,
    title: '',
    picture: '',
    date: '',
  });
  const [editTitle, setEditTitle] = useState('');
  const [posts, setPosts] = useState(initialPosts);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'picture') {
      setNewPost({ ...newPost, picture: URL.createObjectURL(e.target.files[0]) });
    } else {
      setNewPost({ ...newPost, [e.target.name]: e.target.value });
    }
  };

  const handleCreatePost = () => {
    if (newPost.title && newPost.date) {
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      setNewPost({
        id: updatedPosts.length + 1,
        title: '',
        picture: '',
        date: '',
      });
      setShowModal(false);
    }
  };

  const handleEditTitle = (postId, newTitle) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, title: newTitle };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
        <NavBar/>
      <h1>Blog</h1>
      <Button variant="primary" onClick={handleShowModal}>
        Create New Post
      </Button>

      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="file" 
                name="picture"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={newPost.date}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreatePost}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>


      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.picture} alt="Post" style={{ maxWidth: '300px' }} /> 
          <p>Date: {post.date}</p>
          <Button
            variant="primary"
            onClick={() => setEditTitle(post.id)}
            disabled={editTitle === post.id}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDeletePost(post.id)}>
            Delete
          </Button>
          {editTitle === post.id && (
            <div>
              <input
                type="text"
                value={post.title}
                onChange={(e) => handleEditTitle(post.id, e.target.value)}
              />
              <Button variant="primary" onClick={() => setEditTitle('')}>
                Update
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;
