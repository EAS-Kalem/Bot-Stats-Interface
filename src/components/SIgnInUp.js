import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function SignInUp() {
    return (

        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Sign In
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                Sign Up
            </Button>
        </div>

    );
};

export default SignInUp;
