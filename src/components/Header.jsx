import React from 'react';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f8ddac' }}>
      <div className="container-fluid">
        <img
          width="150px"
          alt="Carved Rock Fitness"
          src={process.env.PUBLIC_URL + '/images/logo.png'}
        />
      </div>
    </nav>
  );
}
