"use client";

import SteamProvider from 'next-auth-steam';
import NextAuth from 'next-auth/next'
import { signIn, signOut } from "next-auth/react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam } from '@fortawesome/free-brands-svg-icons';
import '../app/globals.css'; 

export function SignIn() {
  return <button onClick={() => signIn('steam')} class="flex items-center px-4 py-2 bg-[#231f20] text-[#fff] rounded shadow-md hover:bg-[#2e2a2b]"><FontAwesomeIcon icon={faSteam} className="mr-2 w-5 h-5" />Steamでログイン</button>;  
}
