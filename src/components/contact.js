import React from 'react';
import { Form, Button } from 'react-bootstrap';
import NavBar from './navbar';
import './contact.css';

export default function Contact() {
  return (
    <div>
      <NavBar />
      <h1 className='contactheader'>Contact me!</h1>
      <Form className='contact-form'>
        <Form.Group controlId='formTitle'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' />
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='Enter your email' />
        </Form.Group>
        <Form.Group controlId='formText'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={5} placeholder='Tell me your thoughts or share your stories!' />
        </Form.Group>
        <Button className='btn' variant='primary' type='submit'>Send</Button>
      </Form>
    </div>
  );
}

