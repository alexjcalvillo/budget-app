import React from 'react';

function Login() {
  return (
    <div className="border-transparent rounded shadow-lg bg-gray-800 place-items-center text-center p-5">
      <h1 className="text-xl text-gray-500 pb-5 border-b border-gray-500">
        Welcome to your money.
      </h1>

      <div className="grid grid-cols-4 grid-rows-5 gap-2">
        <div className="row-span-1 col-start-2 col-span-2">
          <p className="text-base text-gray-500 pt-5 px-5">
            Login to get started.
          </p>
        </div>
        <div className="col-start-1 lg:col-start-2 col-span-1 text-center py-2 pt-2">
          <label
            htmlFor="username"
            className="text-gray-500 text-sm lg:text-lg"
          >
            Username:{' '}
          </label>
        </div>
        <div className="col-start-2 col-span-2 lg:col-start-3 col-span-2 text-left">
          <input
            id="username"
            type="text"
            placeholder="username"
            className="border rounded py-1 lg:p-2"
          />
        </div>
        <div className="col-start-2 text-center lg:pt-2">
          <label htmlFor="password" className="text-gray-500 lg:text-lg">
            Password:{' '}
          </label>
        </div>
        <div className="col-start-3 col-span-2 text-left">
          <input
            id="password"
            type="password"
            placeholder="password"
            className="border rounded py-2 lg:p-2"
          />
        </div>
        <div className="col-span-4 content-center">
          <button className="btn btn-yellow w-24">Login</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
