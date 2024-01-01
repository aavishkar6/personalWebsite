import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import routes and webpages.
import HomePage from './pages/homePage';
import About from './pages/about';
import Blogs from './pages/blogs';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/personalWebsite" element={<HomePage />} />
        <Route path="/personalWebsite/about" element={<About />} />
        <Route path="/personalWebsite/blogs" element={<Blogs />} />
        {/* Other routes */}
      </Routes>
    </Router>
  </React.StrictMode>,
)