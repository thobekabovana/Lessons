import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTransaction from './components/add';
import DisplayTransactions from './components/Display';
import Home from './components/home';

function App() {
  const [count, setCount] = useState(0)

  const [transactions, setTransaction] = useState([]);

  const add= (transactionItem, amount, transactionType)=>{
    setTransaction ((transactions)=>[...transactions,{transactionItem:transactionItem,  amount:amount, transactionType:transactionType }])
  
  console.log(transactions)

  };

 

  return (
    <>
    <div className="container">
      
      <Home add={add} transactions={transactions} />
      </div>
    </>
  )
}

export default App
