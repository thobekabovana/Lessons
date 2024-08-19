function DisplayTransactions (props) {

    return(
        <>
        <div>
              <h1>History of Transaction</h1>

              {props.transactions.map((data)=> (
                <div>

                  <div className="list-item">
                    <div>
                    <h5>{data.transactionItem}</h5>
                    </div>

                    <div>
                    <h5>{data.amount}</h5>
                    </div>

                    <div>
                      {data.transactionType == "Expense" ? <div className="expenseIndicator"> </div>: <div className="incomeIndicator"></div>}
                    <h5>{data.transactionType}</h5>
                    </div>
                  
                  
                 
                  </div>
                </div>    
              ))}
        </div>
        </>
    )
} 
export default DisplayTransactions