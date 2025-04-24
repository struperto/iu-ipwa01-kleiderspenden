import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/Register';
import Confirm from './pages/Confirm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* zentraler Content-Bereich mit max-Breite & Padding */}
      <main className="max-w-screen-lg mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}