import { useState } from "react";
import Question from "./question";
import Answers from "./answers";


function QuestionForm({ questions }) {

    return (
        <>
            <h1>Questions</h1>
            
        {questions.results.map((question, idx) => { 
            const numberQuestions = question.question;
            const numberedAnswers = question.incorrect_answers;
            const correctAns = question.correct_answer;
            return(
                <div className="question-box" key={idx}>
                    <Question question={numberQuestions} />
                    <Answers answer={numberedAnswers} correct={correctAns} /> 
                </div>
                
            ) 
        })}
        
    </>
        )
};

export default QuestionForm