
import { useState } from "react"


function AddTransaction (props) {

    const [transactionItem, setTransactionItem] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionType, setTransactionType] = useState("");

    const add=  (  ()=>{
     props.add(transactionItem, amount, transactionType);
    })

    

    return(
        <>
        <h1>Add New Transaction</h1>

        <input type="text" placeholder="enter item" onChange={(event)=> setTransactionItem(event.target.value)}/> <br></br>
        <input type="text" placeholder="ener amount" onChange={(event)=> setAmount(event.target.value)}/><br></br>
        
        <select onChange={(event)=> setTransactionType(event.target.value)}>
            <option>Income</option>
            <option>Expense</option>
        </select>

        <button onClick={add}>Add a Transaction</button>
        </>
    )
}

export default AddTransaction