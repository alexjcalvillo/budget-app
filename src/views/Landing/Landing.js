import React from 'react';

// custom components
import Title from '../../components/Title/Title';
import Login from '../../components/Login/Login';

function Landing() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-6">
        <div className="col-span-4 col-start-2">
          <Title />
        </div>
        <div className="col-span-4 col-start-2">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Landing;
