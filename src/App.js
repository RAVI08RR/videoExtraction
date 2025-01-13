import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import necessary components
import './App.css';
import FaceMatchSearch from './components/FaceMatchSearch';
import Header from './components/Header';
import Login from './components/Login';
import SearchHistory from './components/SearchHistory/SearchHistory';
import PersonMatches from './components/PersonmatchesResults/PersonMatches';
import VehicleMatchSearch from './components/VehicleMatchSearch/VehicleMatchSearch';
import PersonMatchesResult from "./components/PersonMatchSearch/PersonMatchSearch";
function App() {
  // A helper component to conditionally render the Header
  const Layout = ({ children }) => {
    const location = useLocation();

    // Paths where the header should not be shown
    const hideHeaderRoutes = ['/login'];

    return (
      <>
        {!hideHeaderRoutes.includes(location.pathname) && <Header />}
        {children}
      </>
    );
  };

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<FaceMatchSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<SearchHistory />} />
          <Route path="/results-person-match" element={<PersonMatches />} />
          <Route path="/vehicle-match" element={<VehicleMatchSearch/>} />
          <Route path="/person-match" element={<PersonMatchesResult/>} />

          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
