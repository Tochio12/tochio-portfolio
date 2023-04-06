import React from 'react';
import weatherImg from '../../assets/weather.jpg';
import noteTakerImg from '../../assets/notetaker.jpg';
import quizImg from '../../assets/quiz.jpg'; 
import pokeImg from '../../assets/poke.jpg';

function Portfolio() {
  return (
    <section id="work" className='jobs'>
      <div className='flex-row'>
        <h2 className='section-title secondary-border'>My Portfolio</h2>
      </div>
      
      <div className='job'>
        <div className='job-info'>
          <div className='job-img'>
            <a href='https://tochio12.github.io/weatherDashboard/'>
              {''}
              <img
                src={weatherImg}
                className='my-2'
                style={{ width: '100%' }}
                alt='weather-dashboard'
              />
            </a>
          </div>
          <div className='job-text'>
            <h4>Weather Dashboard</h4>
            <p>
              A weather dashboard that allows the user to search for a city and see the current weather conditions and the 5-day forecast.
              User can also view the  temperature, humidity, wind speed, and UV index.
            </p>
          </div>
        </div>
      </div>

      <div className='job'>
        <div className='job-info'>
          <div className='job-img'>
            <a href='https://vast-chamber-72110.herokuapp.com/notes'>
              {''}
              <img
                src={noteTakerImg}
                className='my-2'
                style={{ width: '100%' }}
                alt='note-taker'
              />
            </a>
          </div>
          <div className='job-text'>
            <h4>Note Taker</h4>
            <p>
              A note taking application that allows the user to write, save, and delete notes.
            </p>
          </div>
        </div>
      </div>

      <div className='job'>
        <div className='job-info'>
          <div className='job-img'>
            <a href='https://tochio12.github.io/codequiz/'>
              {''}
              <img
                src={quizImg}
                className='my-2'
                style={{ width: '100%' }}
                alt='code-quiz'
              />
            </a>
          </div>
          <div className='job-text'>
            <h4>Quiz Game</h4>
            <p>
              A quiz game that allows the user to answer a series of questions within a time limit.
            </p>
          </div>
        </div>
      </div>

      <div className='job'>
        <div className='job-info'>
          <div className='job-img'>
            <a href='https://pokedecks.herokuapp.com/'>
              {''}
              <img
                src={pokeImg}
                className='my-2'
                style={{ width: '100%' }}
                alt='poke-deck'
              />
            </a>
          </div>
          <div className='job-text'>
            <h4>PokeDeck</h4>
            <p>
            PokeDeck is a website where the user can search for their favorite pokemon and see what kinds of cards are available in distribution
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
export default Portfolio;