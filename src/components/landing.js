import React from 'react';
import NavBar from './navbar';
import './landing.css';
import maxine2 from './images/maxine2.jpeg';

export default function Landing() {
  return (
    <div>
      <NavBar />
      <div className="landing-container">
        <h1 className="landingheader">Welcome to my blog!</h1>
        <br></br>
        <img src={maxine2} alt="My cat, Maxine" className='maxine'/>
        <h6 className="landingsubtext">A blog for cats! Join me in my experiences of owning a cat, from their hilarious acrobatic failures to their
         sweet cuddly moments on our hardest days. Click the posts button to see recent posts, and the contact button to make suggestions or tell me your own funny feline stories!</h6>
        
      </div>
    </div>
  );
}


