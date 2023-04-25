import useFetch from './hooks/useFetch'
import Header from './components/Header'
import Blockchain from './components/Blockchain'
import AddTransactionForm from './components/AddTransactionForm'
import MineBlockScreen from './components/MineBlockScreen'
import TransactionsQueue from './components/TransactionsQueue'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
	const blockchain = useFetch(`http://localhost:8080/get-chain`)

	return (
		<Router>
			<Header/>
            <Routes>
                <Route path="/" element={<Blockchain blockchain={blockchain}/>} />
                <Route path='/transactions-queue' element={<TransactionsQueue blockchain={blockchain}/>} />
                <Route path='/add-transaction' element={<AddTransactionForm/>} />
                <Route path='/mine-block' element={<MineBlockScreen/>} />
            </Routes>   
		</Router>
	)
}

export default App
