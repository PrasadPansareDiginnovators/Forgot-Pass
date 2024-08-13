import React from 'react';
import ats from "../img/ATS.svg";

const ForgotPassword = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 ">
      <div className="absolute top-10 flex justify-center w-full">
        <img src={ats} alt="ats" className='w-[101.67px] h-[40px] sm:h-[60px] mt-12' />
      </div>
      <div className=" max-w-[440px] sm:w-full bg-white rounded-md shadow-lg p-11 sm:p-12">
        <h1 className="text-3xl font-bold text-center">Forgot Password</h1>
        <p className="text-center text-xs mt-3 mb-8 font-semibold">
          Enter your email for the verification process. We will send a code to your email.
        </p>
        <div className="my-6 text-left">
          <label className="block text-[#1C1C1C] text-sm font-semibold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border border-[#EAEAEA] rounded-lg bg-[#F7F7F8]" />
        </div>
        <button className="w-full px-4 py-2.5 mt-3 text-white bg-[#882EFD] rounded-md focus:outline-none sm:max-w-full">
          Continue
        </button>
        <div className="pl-4 my-4 text-xs flex w-full">
          Never mind, I remember my password. Back to <span className="text-[#882EFD] cursor-pointer font-bold ml-1">Sign in</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
