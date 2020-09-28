import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="bg-gray-800 border-b border-gray-500 h-24">
      <p className="text-gray-500">This is the Navbar</p>
      <nav>
        <Link to="/budget" className="text-gray-500">
          Build Budget
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
