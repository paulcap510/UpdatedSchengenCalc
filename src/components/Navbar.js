import React from 'react';
import './Navbar.css';

function Navbar({ isDarkMode, toggleTheme }) {
  return (
    <div className="navbar">
      <h2 className="nav-brand">
        Paul's<br></br> Visa Calculator<br></br> V2
      </h2>
      <ul>
        <li>
          <button>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"
                />
              </svg>
            </span>{' '}
            Link1
          </button>
        </li>
        <li>
          <button>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"
                />
              </svg>
            </span>{' '}
            Link2
          </button>
        </li>
        <li>
          <button>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6m-6 160H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h130Z"
                />
              </svg>
            </span>{' '}
            Link3
          </button>
        </li>
      </ul>

      <div className="theme-toggle">
        <button onClick={toggleTheme}>{isDarkMode ? '🌙' : '☀️'}</button>
      </div>
    </div>
  );
}

export default Navbar;
