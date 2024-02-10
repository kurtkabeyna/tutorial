import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import PeoplaAlsoAsk from './components/PeoplaAlsoAsk';
import './components/PeoplaAlsoAsk.css';


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Banner />
      <Footer />
      <div className="PAA">

        <PeoplaAlsoAsk question="Как купить криптовалюту?" answer="dqwdqwdwqdwqdqwdwq..." />
        <PeoplaAlsoAsk question="Как купить криптовалюту?" answer="Вам нужно сделать следующее..." />
        <PeoplaAlsoAsk question="Как купить криптовалюту?" answer="Вам нужно сделать следующее..." />
        <PeoplaAlsoAsk question="Как купить криптовалюту?" answer="Вам нужно сделать следующее..." />
      </div>
    </div>

  );
};

export default App
