import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@/App.css';
import LoveMeterPage from './pages/LoveMeterPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import BirthdayLetterPage from './pages/BirthdayLetterPage';
import Navigation from './components/Navigation';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  
  return (
    <div className="App relative min-h-screen overflow-hidden">
      <BackgroundEffects />
      <BrowserRouter>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route path="/" element={<LoveMeterPage onComplete={() => setCurrentPage(1)} />} />
          <Route path="/gallery" element={<PhotoGalleryPage />} />
          <Route path="/letter" element={<BirthdayLetterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;