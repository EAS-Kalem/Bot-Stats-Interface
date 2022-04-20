import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>EAS Quiz Bot</h1>
      <p>"The aspiring developers learning bot"</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          Sign In
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
          Sign Up 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

