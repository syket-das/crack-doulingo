import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutDoulingo from './pages/aboutDoulingo/AboutDoulingo';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutDoulingo" element={<AboutDoulingo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
