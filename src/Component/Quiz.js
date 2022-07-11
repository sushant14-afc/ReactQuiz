import React, { useState } from 'react'

const Quiz = () => {
    const questionBank = [
        {
            Question: "What does CSS Stands for?",
            answerText: [
                { answer: "Cascading Style Sheet", isCorrect: true },
                { answer: "Capital Style Sheet", isCorrect: false },
                { answer: "Coding Style Sheet", isCorrect: false },
                { answer: "Class Style Sheet", isCorrect: false },
            ],
        },
        {
            Question: "What does HTML stand for?",
            answerText: [
                { answer: "Home Tool MarkUp Language", isCorrect: false },
                { answer: "HyperLinks and Text MarkUp Language ", isCorrect: false },
                { answer: "Hyper Text MarkUp Language", isCorrect: true },
                { answer: "Hype Test MarkUp Limit", isCorrect: false },
            ],
        },
        {
            Question: "Choose the correct HTML element for the largest heading:",
            answerText: [
                { answer: "<h6>", isCorrect: false },
                { answer: "Heading", isCorrect: false },
                { answer: "Head", isCorrect: false },
                { answer: "<h1>", isCorrect: true },
            ],
        },
        {
            Question: "What is the correct HTML element for inserting a line break?",
            answerText: [
                { answer: "<lb>", isCorrect: false },
                { answer: "<br>", isCorrect: true },
                { answer: "<break>", isCorrect: false },
                { answer: "<lr>", isCorrect: false },
            ],
        },
        {
            Question: "Choose the correct HTML element to define emphasized text",
            answerText: [
                { answer: "<i>", isCorrect: false },
                { answer: "<b>", isCorrect: false },
                { answer: "<em>", isCorrect: true },
                { answer: "<italic>", isCorrect: false },
            ],

        },

        {
            Question: "Which of the following characters indicate closing of a tag",
            answerText: [
                { answer: ".", isCorrect: false },
                { answer: "/", isCorrect: true },
                { answer: "//", isCorrect: false},
                { answer: "!", isCorrect: false },
            ],

        },

        {
            Question: "How many heading tags are there in HTML5",
            answerText: [
                { answer: "2", isCorrect: false },
                { answer: "3", isCorrect: false },
                { answer: "5", isCorrect: false},
                { answer: "6", isCorrect: true },
            ],

        },

        {
            Question: "Which of the following is the correct way to add background color in HTML?",
            answerText: [
                { answer: "<body color = “green”>", isCorrect: false },
                { answer: "<body style = “background-color: green;”>", isCorrect: true},
                { answer: "<body bg-color = “green”>", isCorrect:false },
                { answer: "<body style = “background-color=green”>", isCorrect: false},
                
            ],

        },

        {
            Question: "Which tag is used for creating a drop-down selection list?",
            answerText: [
                { answer: "<select>", isCorrect: true },
                { answer: "<option>", isCorrect: false },
                { answer: "<dropdown>", isCorrect: false},
                { answer: "<list>", isCorrect: false },
            ],

        },

        {
            Question: "What is the purpose of using div tags in HTML?",
            answerText: [
                { answer: "For creating Different styles.", isCorrect: false },
                { answer: "For creating different sections.", isCorrect: true },
                { answer: "For adding headings.", isCorrect: false},
                { answer: "For adding titles.", isCorrect: false },
            ],

        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, SetShowScore] = useState(false)



    const handleAnswerButtonClick = (isCorrect) =>{
        if(isCorrect === true){
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion +1;
        if(nextQuestion < questionBank.length){
            setCurrentQuestion(nextQuestion)
        }
        else{
            SetShowScore(true)
        }
    }


    return (
        <div>
            {showScore ? (
                <div>Your score is {score} out of {questionBank.length}</div>
            )
                : (
                    <>
                        <h3>Quiz Test</h3>
                        <div className='questions'>
                            
                            <div className='question-num'>
                                <span>{currentQuestion + 1}/</span>{questionBank.length}
                            </div>
                            <div className='question-text'>
                                {questionBank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-sec'>
                            {questionBank[currentQuestion].answerText.map((answerTexts)=>(
                                <button onClick={()=> handleAnswerButtonClick(answerTexts.isCorrect)}>{answerTexts.answer}</button>
                            ))}
                        </div>
                    </>
                )
            }
        </div>

    )
}

export default Quiz