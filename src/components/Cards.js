import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What Can The Bot Do?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
    
            <CardItem
              src='../../public/img/bot.jpg'
              text='Learn with quiz bot, quiz bot can give you facts randomly or you can choose a topic 💡'
              label='Bot'
              path='/services'
            />
            <CardItem
              src='my-app/src/components/graph.png'
              text='Challange your friends with quiz bot now! Get a random quiz or choose a quiz topic 🎮'
              label='Bot'
              path='/services'
            />
            <CardItem
              src='./images/bot.jpeg'
              text='Nothing beats a good quote, Use quiz bots quote microservice to find great quotes 📝'
              label='Bot'
              path='/services'
            />
             <CardItem
              src='../../images/bot.jpeg'
              text='Quiz bot can also randomly generate images or pick images with a specific tag like "Cats" 🐈'
              label='Bot'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='graph.png'
              text='Leaderboard '
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