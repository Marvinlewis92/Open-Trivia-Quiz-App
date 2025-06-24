import { useState } from "react";

function QuestionForm({ questions }) {

    console.log(questions)

    
    if (!questions || !questions.results) {
        return <div>No questions available.</div>;
    }

    
    return (
        <>
            <h1>Questions</h1>
        {questions.results.map((question, idx) => { 
            console.log(question);
            return(
            <div key={idx}>
                {question.question}
                </div>  
            ) 
        })}
        
    </>
        )
};

export default QuestionForm