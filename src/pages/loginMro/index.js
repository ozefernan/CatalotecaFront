import React from 'react';
import NavBar from '../components/navbar';
import LoginForm from './components/LoginForm';
import Footer from '../components/footer';

export default function loginMro() {
  return (
    <>
      <NavBar />
      <LoginForm />
      <Footer />
    </>
  );
}
