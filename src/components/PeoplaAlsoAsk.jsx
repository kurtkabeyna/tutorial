import React, { useState } from 'react';


const PeoplaAlsoAsk = ({ question, answer }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswer = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div className="faq-item">
            <div className="question" onClick={toggleAnswer}>
                <span>{question}</span>
                <div className={`toggle-icon ${isAnswerVisible ? 'open' : ''}`}>&#9660;</div>
            </div>
            {isAnswerVisible && <div className="answer">{answer}</div>}
        </div>
    );
};

export default PeoplaAlsoAsk;
