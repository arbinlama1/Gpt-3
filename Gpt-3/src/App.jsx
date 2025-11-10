import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Article, Brands, Cta, Feature, Navbar } from './component';
import { Blog, Features, Footer, Header, Possibility, WhatGpt3 } from './containers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
