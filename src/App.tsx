import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Confirm from './pages/Confirm';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}