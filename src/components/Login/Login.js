import React from 'react';

function Login() {
  return (
    <div className="border rounded shadow-lg place-items-center text-center p-10 divide-y">
      <h1 className="text-xl text-gray-500 pb-5">Welcome to your money.</h1>

      <div className="py-8">
        <label htmlFor="username" className="text-gray-500">
          Username:{' '}
        </label>
        <input
          id="username"
          type="text"
          placeholder="username"
          className="border p-2 my-2"
        />
        <br />
        <label htmlFor="password" className="text-gray-500">
          Password:{' '}
        </label>
        <input id="password" type="password" className="border p-2 my-2" />
        <div>
          <button>Login</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Login;
