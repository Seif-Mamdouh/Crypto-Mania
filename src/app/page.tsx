"use client"
import React from 'react';
import ReactDOM from 'react-dom';


import HomeComponent from './components/HomeComponent';
import FetchCryptoData from './components/FetchCryptoData';

export default function Home() {
  return (
    <>
      <HomeComponent />
      <FetchCryptoData/>
    </>
  );
}
