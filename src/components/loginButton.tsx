"use client";

import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import '../app/globals.css'; 

const LoginButton = () => {
  return (
    <button
      onClick={() => signIn('steam')}
      className="flex items-center px-4 py-2 bg-[#231f20] text-[#fff] rounded shadow-md hover:bg-[#2e2a2b]">
      <FontAwesomeIcon icon={faSteam} className="mr-2 w-5 h-5" />
      Steamでログイン
    </button>
  );
};

export default LoginButton;
