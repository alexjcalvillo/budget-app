import React from 'react';

// custom components
import Title from '../../components/Title/Title';
import Login from '../../components/Login/Login';

function Landing() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-8 grid-rows-3">
        <div className="col-span-6 col-start-2 row-span-1 px-8">
          <Title />
        </div>
        <div className="col-span-6 col-start-2 row-span-2 row-start-2">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Landing;
