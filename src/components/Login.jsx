import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, logInWithEmailAndPassword } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading, navigate]);

  const signIn = e => {
    e.preventDefault();

    logInWithEmailAndPassword(email, password);
  };

  const register = e => {
    e.preventDefault();

    registerWithEmailAndPassword(email, password);
  };

  return (
    <div className='flex flex-col items-center mt-10 h-screen bg-white'>
      <div className="w-96 flex flex-col rounded-md h-fit shadow-md pl-4 pr-1">
        <h1 className="text-3xl font-bold font-sans my-5">Sign-in</h1>

        <form className="">
          <div className="mb-3">
            <h5 className="mb-1 font-sans">E-mail</h5>
            <input type="text" className="h-8 w-11/12 outline-none px-4" value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="mb-3">
            <h5 className="mb-1 font-sans">Password</h5>
            <input type="password" className="h-8 w-11/12 outline-none px-4" value={password} onChange={e => setPassword(e.target.value)} />
          </div>

          <button
            type='submit'
            className="text-[0.35rem] md:text-sm lg:text-base text-[#0f1111] px-1 md:px-2 lg:px-4 py-[0.15rem] md:py-1 mr-2 shadow-lg bg-[#f0c14b] border-[#f0c14b] hover:bg-[#f7dfa5] text-center rounded-sm md:rounded-md lg:rounded-lg w-11/12 font-sans"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p className="font-sans mt-4 text-xs">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>

        <button
          onClick={register}
          className="mb-4 text-[0.35rem] md:text-sm lg:text-base text-[#0f1111] px-1 md:px-2 lg:px-4 py-[0.15rem] md:py-1 mr-2 shadow text-center rounded-sm md:rounded-md lg:rounded-lg w-11/12 font-sans border-[#e7e9ec] bg-[#e7e9ec] hover:bg-[#f7f8fa]"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
