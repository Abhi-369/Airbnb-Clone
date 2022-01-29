import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import SearchPage from "./SearchPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    // BEM
    <div className="app">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
