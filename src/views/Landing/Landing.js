import React from 'react';

// custom components
import Title from '../../components/Title/Title';
import Login from '../../components/Login/Login';

function Landing() {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-8 grid-rows-12 gap-4">
        <div className="col-start-1 col-end-9 row-span-1 row-start-1">
          <Title />
        </div>
        <div className="col-start-1 col-end-9 row-span-7 lg:col-start-3 lg:col-end-7">
          <Login />
        </div>
        <div className="col-start-2 col-span-6">
          <p className="text-center">
            Don't have an account?{' '}
            <span className="underline cursor-pointer">Sign up</span>
          </p>
          <p className="text-center">
            <span className="underline cursor-pointer">Forgot Password?</span>
          </p>
        </div>
        <div className="row-start-7 row-span-6"></div>
      </div>
    </div>
  );
}

export default Landing;
