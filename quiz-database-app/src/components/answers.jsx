import { useState } from "react";

function Answers({ answer }) {
    
    return(
        <>
        {answer.forEach(ans => {
            console.log(ans)
        })}
        </>
    )
}

export default Answers