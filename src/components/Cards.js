import React from 'react';
import './Cards.css';

import CardItem from './CardItem';
import Quiz from "../img/quiz.jpeg";
import Facts from "../img/facts.png";
import Quotes from "../img/quotes.jpeg";
import Photos from "../img/images.jpeg";
import Highscore from "../img/highscore.jpeg";
import Senior from "../img/senior.jpeg";

function Cards() {
  return (
    <div className='cards'>
      <h1>What Can The Bot Do?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
    
            <CardItem
              src= {Facts}
              text='Learn with quiz bot, quiz bot can give you facts randomly or you can choose a topic 💡'
              label='Quiz Bot'
              path='/quiz'
            />
            <CardItem
              src={Quiz}
              text='Challange your friends with quiz bot now! Get a random quiz or choose a quiz topic 🎮'
              label='Quiz Bot'
              path='/services'
            />

            <CardItem
              src={Quotes}
              text='Nothing beats a good quote, Use quiz bots quote microservice to find great quotes 📝'
              label='Quiz Bot'
              path='/services'
            />
             <CardItem
              src={Photos}
              text='Quiz bot can also randomly generate images or pick images with a specific tag like "Cats" 🐈'
              label='Quiz Bot'
              path='/services'
            />
          </ul>
          <h1>Quiz Bot Stats</h1>
          <ul className='cards__items'>
            
            <CardItem
              src={Highscore}
              text='Take a look at the leaderboard and see how you compare to the other trainees🏆'
              label='Tracking'
              path='/sign-up'
            />
            <CardItem
              src={Senior}
              text='Area for admins to look at all correct and incorrect answers for all trainees in the organisation📊'
              label='Tracking'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;