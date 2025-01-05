import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import InfoPage from './components/InfoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* ルートパスでAppをレンダリング */}
        <Route path="/" element={<App />} />
        {/* /infoパスでInfoPageをレンダリング */}
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
