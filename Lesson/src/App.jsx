import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTransaction from './components/add';
import DisplayTransactions from './components/Display';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './components/lod-in';
import Sign from './components/SignUp';

 

function App() {
  const [count, setCount] = useState(0)

  const [transactions, setTransaction] = useState([]);

  const add= (transactionItem, amount, transactionType)=>{
    setTransaction ((transactions)=>[...transactions,{transactionItem:transactionItem,  amount:amount, transactionType:transactionType }])
  
  console.log(transactions)

  };

 

  return (
    <>
 <BrowserRouter>
    <div className="container">
   
      <Routes>
        <Route path="/" element={<LogIn />}></Route>


          <Route path='/home' element={<Home add={add} transactions={transactions} />}/>

          <Route path="/signUp" element={<Sign />}></Route>  
          </Routes>
      </div>
      </BrowserRouter>

     
    </>
  )
}

export default App
