import React from 'react';

// custom components
import Title from '../../components/helpers/Title';
import Login from '../../components/Login/Login';

function Landing() {
  return (
    <div className="">
      <div className="">
        <Title text="Time to Budget in a Cool way" />
        <Login />
      </div>
    </div>
  );
}

export default Landing;
