import React from 'react';
import { ToastProvider } from '@/components/ui/toast'; // Correct shadcn ToastProvider
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <ToastProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ToastProvider>
  );
}
