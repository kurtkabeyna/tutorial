import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PeoplaAlsoAsk from '../components/PeoplaAlsoAsk'
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <div className="spacer"></div>
            <div className="PAA">
                <PeoplaAlsoAsk question="Где купить криптовалюту?" answer="- У братанчика артикса" />
                <hr className="question-divider" />
                <PeoplaAlsoAsk question="Где поменять валюту?" answer=" - У братанчика артикса" />
                <hr className="question-divider" />
                <PeoplaAlsoAsk question="Как купить криптовалюту?" answer="Вам нужно сделать следующее..." />
                <hr className="question-divider" />
                <PeoplaAlsoAsk question="Как купить криптовалюту?" answer="Вам нужно сделать следующее..." />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
