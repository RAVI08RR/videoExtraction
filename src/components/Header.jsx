import React from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { History } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <Navbar className="header-nav py-2">
      <Container fluid className="px-4">
        {/* Logo Section */}
        <Navbar.Brand href="/" className="d-flex flex-column">
          <span className="brand-name">VACF</span>
          <span className="brand-subtitle d-none d-lg-block">Video Analytics on CCTV Video Feeds</span>
        </Navbar.Brand>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-4">
          {/* Search History Button - Visible on Desktop */}
          <div className="d-none d-lg-block">
            <button className="history-btn">
              <a href="/history">
                Search History <History />
              </a>
            </button>
          </div>

          {/* Cart Icon with Badge */}
          <div className="cart-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
            >
              <path
                d="M21.1911 22.4003V22.5236L21.2777 22.6112L23.3182 24.6752C24.1337 25.5001 23.5568 26.9003 22.4085 26.9003H1.57623C0.446933 26.9003 -0.135422 25.5023 0.682309 24.6752L2.72283 22.6112L2.80949 22.5236V22.4003V14.4003C2.80949 9.57443 5.32529 5.62787 9.69749 4.58003L9.92758 4.52489V4.28829V3.20029C9.92758 2.03473 10.8563 1.10029 12.0003 1.10029C13.1443 1.10029 14.073 2.03473 14.073 3.20029V4.28829V4.5247L14.3028 4.57998C18.6596 5.62778 21.1911 9.5907 21.1911 14.4003V22.4003ZM18.3275 24.3003H18.6275V24.0003V14.4003C18.6275 12.3583 18.0129 10.4866 16.8711 9.11995C15.725 7.74819 14.0591 6.90029 12.0003 6.90029C9.94143 6.90029 8.27552 7.74819 7.12945 9.11995C5.9876 10.4866 5.37308 12.3583 5.37308 14.4003V24.0003V24.3003H5.67308H18.3275ZM14.8485 29.1003C14.6989 30.5577 13.4717 31.7003 12.0003 31.7003C10.5148 31.7003 9.29981 30.5585 9.15182 29.1003H14.8485Z"
                fill="#5C5C5C"
                stroke="white"
                strokeWidth="0.6"
              />
            </svg>
            <span className="cart-badge">4</span>
          </div>

          {/* Profile Dropdown */}
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
            {/* Search History Button - Visible on Mobile */}
            <NavDropdown.Item href="/history" className="d-lg-none">
              Search History 
            </NavDropdown.Item>
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
