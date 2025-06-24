import { useState } from "react";

function Answers({ answer, correct }) {
    console.log(answer, correct)
    
    return(
            <select>
             {answer.map(ans => ( 
                        <option key={ans}
                        value={ans}
                        >
                            {ans} 
                        </option>
                    
                ))}
                <option value={correct}>{correct}</option>
            </select>
        
    )
}

export default Answers