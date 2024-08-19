function DisplayTransactions (props) {

    return(
        <>
        <div>
              <h1>History of Transaction</h1>

              {props.transactions.map((data)=> {
                <div>
                  
                </div>    
              })}
        </div>
        </>
    )
} 
export default DisplayTransactions