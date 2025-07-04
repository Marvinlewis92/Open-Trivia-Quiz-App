import { useState } from "react";
import ResultPage from "./resultPage";


function QuestionForm({ questions, data, setFormData, setSuccess }) {

    const[formAnswer, setFormAnswer] = useState(" ");
    const[result, setResult] = useState(false);
    const[error, setError] = useState('');

    const handleAnswerChange = (e) => {
        const { name, value } = e.target;

        setFormAnswer(value)

    };

    
    const validateForm = () => {

        if (formAnswer.trim()=== " "){
            return false
        }

    }
    
    const handleAnswerSubmit = (e) => {
        e.preventDefault();

        if (!validateForm) {
            return
        };
        
         if (formAnswer === questions.results[0].correct_answer) {
            setResult(true)
            setError(false)
         } else setError("Please try again")

    }

    const handleReset = () => {
        setFormData({
        firstName: '',
        lastName: '',
        category: '',
        difficulty: '',
    });

    setSuccess(false);
    setResult(false);
    setError(false);
    }



    return (
        <>
            <h1>Questions</h1>
            
        {questions.results.map((question, idx) => { 
            const numberQuestions = question.question;
            const numberedAnswers = question.incorrect_answers;
            const correctAns = question.correct_answer;
            return(
                
                <form onSubmit={handleAnswerSubmit} className="question-box" key={idx}>
                <label htmlFor="formAnswer"> {numberQuestions}</label><br />
               

               <select name="formAnswer" id="formAnswer" value={formAnswer} onChange={handleAnswerChange}>
             {numberedAnswers.map((ans, index) => ( 
                        <option key={index}
                        value={ans}
                        >
                            {ans} 
                        </option>
                    
                ))}
                <option value={correctAns}>{correctAns}</option>
            </select>


                    <button type="submit">Check Answers</button>
                </form>
            ) 
        })}

        {error && <p>{error}</p>}
        {result && <ResultPage data={data} />}
        {result && <button type="button" onClick={handleReset}>Reset</button>}
        
    </>
        )
};

export default QuestionForm