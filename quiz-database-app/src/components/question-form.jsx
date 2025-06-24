import { useState } from "react";
import Question from "./question";
import Answers from "./answers";


function QuestionForm({ questions }) {

    return (
        <>
            <h1>Questions</h1>
            
        {questions.results.map((question, idx) => { 
            const numberQuestions = question.question
            const numberedAnswers = question.incorrect_answers
            return(
                <div key={idx}>
                    <Question question={numberQuestions} />
                    <Answers answer={numberedAnswers} />
                </div>
                
            ) 
        })}
        
    </>
        )
};

export default QuestionForm