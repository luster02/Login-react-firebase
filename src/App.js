import React, { Suspense } from 'react';
import { Routes } from './routes/index'
import './App.css';

import { LoaderSpinner } from './components/LoaderSpiner'

function App() {
  return (
    <Suspense fallback={<LoaderSpinner/>}>
      <Routes/>    
    </Suspense>
  );
}

export default App;
