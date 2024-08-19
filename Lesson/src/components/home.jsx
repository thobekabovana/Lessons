import AddTransaction from "./add"
import DisplayTransactions from "./Display"
function Home (props) {

    return(

        <>
        <AddTransaction add={props.add}/>
        <DisplayTransactions transactions={props.transactions}/>
        </>
    )
}
export default Home