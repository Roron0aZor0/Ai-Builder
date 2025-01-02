import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SimpleFooter from './components/Footer';
import React, { Suspense, lazy } from 'react';

const Homepage = lazy(() => import('./pages/Homepage'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));

function App() {
  return (
    <Router>
       <Navbar />
       
       <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />

      </Routes>
      </Suspense>
      <SimpleFooter />
    </Router>
  );
}

export default App;
