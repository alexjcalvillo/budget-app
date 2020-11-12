import React from 'react';
import ActionButton from '../helpers/ActionButton';

function Login() {
  return (
    <div className="flex max-w h-full justify-center items-center">
      <div className="w-11/12 bg-gray-800 rounded-md">
        <div className="border-b text-center text-gray-400 py-2 text-3xl">
          <p className="font-thin">SIGN IN</p>
        </div>
        <div className="p-8">
          <form className="">
            <div className="my-4">
              <input type="text" placeholder="Username" className="border rounded w-full py-2 px-4 outline-none"/>
            </div>
            <div className="my-4">
              <input type="password" placeholder="Password" className="border rounded w-full py-2 px-4 outline-none"/>
            </div>
            <div className="my-4 flex">
              <ActionButton text="REGISTER" width="1/2" />
              {/* <button className="border rounded py-2 px-4 w-1/2 text-white">REGISTER</button> */}
              {/* <button className="border rounded py-2 px-4 w-1/2 bg-yellow-400 text-white ml-2 hover:text-gray-600 hover:bg-white">SIGN IN</button> */}
              <ActionButton text="SIGN IN" width="1/2" color="yellow"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
