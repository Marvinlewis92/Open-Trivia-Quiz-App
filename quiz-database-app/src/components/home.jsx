import { useState } from "react";
import QuestionForm from "./question-form";
import ResultPage from "./resultPage";

function Home(){

     const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        category: '',
        difficulty: '',
    });

    const [question, setQuestion] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');



     const handleChange = (event) => {
        const { name, value } = event.target; 
    
        setFormData((prevState) => ({
          ...prevState,
          [name]: value, 
        }));

      };



       const validateForm = () => {
        const {firstName, category, difficulty} = formData;

        if (firstName.trim() === " " || category.trim() === '' || difficulty.trim() === " ") {
            setSuccess('');
            setError('First name, category, and difficulty and are required');
            return false; //stops whole function here so user cant continue
        }
        setError('');
        return true;
    };


    const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (!validateForm()) {
      return; 
    }

    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=1&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`);

      if (!response.ok) {
        throw new Error('Failed to get questions');
      }

      
      
      const data = await response.json();
      setSuccess("questions loaded succesfully")
      setQuestion(data);
      //   setFormData({
        //     firstName: '',
        //     lastName: '',
        //     category: '',
        //     difficulty: '',
        // })
        
        console.log(data)

    } catch (e) {
        console.error(e)
        setError(e.message);
    }
  };
//   console.log(props)
    return (
        <>
        <h1>Welcome to the Quiz App</h1>
        <p>Instructions:</p>
        <ul>
            <li>Asnwer each question to move on</li>
            <li>The questions are not timed</li>
            <li>Answer to the best of your knowledge</li>
            <li>Most importantly HAVE FUN!</li>
        </ul>


        <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="firstName">First Name</label><br/>
          <input
            type="text"
			id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label><br/>
          <input
            type="text"
			id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </div><br/>

        <div>
            <label htmlFor="category">Choose a Category:</label><br />
            <select name="category" id="category" value={formData.category} onChange={handleChange}>
                <option value=""></option>
                <option value="21">Sports</option>
                <option value="20">Mythology</option>
                <option value="22">Geography</option>
                <option value='24'>Politics</option>
            </select>
        </div><br />

         <div>
            <label htmlFor="difficulty">Choose Difficulty:</label><br />
            <select name="difficulty" id="difficulty" value={formData.difficulty} onChange={handleChange}>
                <option value=""></option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div><br />


        <button type="submit">Submit</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      {success && <QuestionForm questions ={question} data={formData} setFormData={setFormData} setSuccess={setSuccess} /> }

        </>
    )
}; 

export default Home;