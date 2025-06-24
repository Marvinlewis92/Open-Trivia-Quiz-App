function ResultPage({ data }){
    console.log(data)
    
    return(
        <>
        <h1>
            Correct! Good Job {data.firstName} {data.lastName} 
        </h1>
        </>
    )
} 

export default ResultPage