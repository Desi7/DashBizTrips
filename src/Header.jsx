import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img
              width="150px"
              alt="Carved Rock Fitness"
              src={process.env.PUBLIC_URL + '/images/logo.png'}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
