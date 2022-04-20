import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

export default function SignUp() {
  return (
    <>
      <HeroSection />
     <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </>
  );
};
