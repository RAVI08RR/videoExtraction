import React from 'react';
import './App.css';
// import '../antd/dist/antd.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import FaceMatchSearch from './components/FaceMatchSearch';
import Header from './components/Header';
import Login from './components/Login';
import SearchHistory from './components/SearchHistory/SearchHistory';
import PersonMatches from './components/PersonmatchesResults/PersonMatches';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<FaceMatchSearch />} />
        <Route path="/login" element={<Login />} />

        <Route path="/history" element={<SearchHistory />} />
        <Route path="/results-person-match" element={<PersonMatches />} />



        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
