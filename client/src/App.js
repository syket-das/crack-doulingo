import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutDoulingo from './pages/aboutDoulingo/AboutDoulingo';
import Footer from './components/footer/Footer';
import DictationPage from './pages/dictation/DictationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutDoulingo" element={<AboutDoulingo />} />
          <Route path="/dictation" element={<DictationPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
