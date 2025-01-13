import React, { useState } from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { History, Menu } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isPathActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar className="header-nav py-2">
      <Container fluid className="px-4">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Left Section with Hamburger and Logo */}
          <div className="d-flex align-items-center">
            <button 
              className="hamburger-btn d-lg-none border-0 bg-transparent me-3"
              onClick={toggleMenu}
            >
              <Menu size={24} />
            </button>

            <Navbar.Brand as={Link} to="/" className="d-flex flex-column me-0 me-lg-4">
             <img src='/logo.svg' className='logo' alt='logo' style={{width:'200px'}}/>
            </Navbar.Brand>
          </div>

          {/* Center Navigation - Desktop Only */}
          <div className="center-nav d-none d-lg-flex align-items-center gap-4">
            <Link 
              to="/" 
              className={`nav-link ${isPathActive('/') ? 'active' : ''}`}
            >
              FACE
            </Link>
            <Link 
              to="/person-match" 
              className={`nav-link ${isPathActive('/person-match') ? 'active' : ''}`}
            >
              PERSON
            </Link>
            <Link 
              to="/vehicle-match" 
              className={`nav-link ${isPathActive('/vehicle-match') ? 'active' : ''}`}
            >
              VEHICLE
            </Link>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-3">
            <Link 
              to="/history"
              className={`history-btn d-none d-lg-flex align-items-center ${isPathActive('/history') ? 'active' : ''}`}
            >
              <History size={20} className="me-2" />
              Search History
            </Link>

            {/* Cart Icon */}
            <div className="cart-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
              >
                <path
                  d="M21.1911 22.4003V22.5236L21.2777 22.6112L23.3182 24.6752C24.1337 25.5001 23.5568 26.9003 22.4085 26.9003H1.57623C0.446933 26.9003 -0.135422 25.5023 0.682309 24.6752L2.72283 22.6112L2.80949 22.5236V22.4003V14.4003C2.80949 9.57443 5.32529 5.62787 9.69749 4.58003L9.92758 4.52489V4.28829V3.20029C9.92758 2.03473 10.8563 1.10029 12.0003 1.10029C13.1443 1.10029 14.073 2.03473 14.073 3.20029V4.28829V4.5247L14.3028 4.57998C18.6596 5.62778 21.1911 9.5907 21.1911 14.4003V22.4003Z"
                  fill="#5C5C5C"
                  stroke="white"
                  strokeWidth="0.6"
                />
              </svg>
              <span className="cart-badge">4</span>
            </div>

            {/* Profile Section */}
            <div className="d-none d-lg-block">
              <NavDropdown
                title={
                  <div className="profile-section">
                    <div className="profile-info">
                      <span className="profile-name">Sanjay Reddy</span>
                      <span className="profile-role">Additional SP</span>
                    </div>
                    <div className="profile-avatar">
                      <img
                        src="/profile.png"
                        alt="Profile"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                }
                id="profile-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/change-password">Change Password</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/edit-profile">Edit Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/login">Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
     {/* Mobile Menu */}
<div className={`mobile-menu d-lg-none ${isOpen ? 'show' : ''}`}>
  <div className="mobile-menu-content p-4">
    {/* Close Icon */}
    <button 
      className="close-btn border-0 bg-transparent mb-4"
      onClick={toggleMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>

    {/* Mobile Navigation Links */}
    <div className="mobile-nav-links mb-4">
      <Link 
        to="/" 
        className={`mobile-menu-item ${isPathActive('/') ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        FACE
      </Link>
      <Link 
        to="/person-match" 
        className={`mobile-menu-item ${isPathActive('/person-match') ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        PERSON
      </Link>
      <Link 
        to="/vehicle-match" 
        className={`mobile-menu-item ${isPathActive('/vehicle-match') ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        VEHICLE
      </Link>
    </div>

    {/* Additional Mobile Links */}
    <Link 
      to="/history" 
      className={`mobile-menu-item ${isPathActive('/history') ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      <History size={20} />
      Search History
    </Link>
    <Link 
      to="/profile" 
      className={`mobile-menu-item ${isPathActive('/profile') ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      Profile
    </Link>
    <Link 
      to="/change-password" 
      className={`mobile-menu-item ${isPathActive('/change-password') ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      Change Password
    </Link>
    <Link 
      to="/edit-profile" 
      className={`mobile-menu-item ${isPathActive('/edit-profile') ? 'active' : ''}`}
      onClick={toggleMenu}
    >
      Edit Profile
    </Link>
    <Link 
      to="/login" 
      className="mobile-menu-item"
      onClick={toggleMenu}
    >
      Logout
    </Link>
  </div>
</div>

      </Container>
    </Navbar>
  );
}

export default Header;