import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/Register';
import Confirm from './pages/Confirm';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* central content area: max width, centered, responsive padding */}
      <main className="max-w-screen-lg mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spende" element={<Register />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}