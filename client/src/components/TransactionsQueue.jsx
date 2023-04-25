import React, { useState, useEffect } from 'react'
import { parseTransactionString } from '../utils/utils'

export default function TransactionsQueue({ blockchain }) {
	const [transactionStrings, setTransactionStrings] = useState([])

	useEffect(() => {
		setTransactionStrings(blockchain.transactions_queue)
	}, [blockchain])

	const transactions = transactionStrings
		? transactionStrings.map((transaction) =>
				parseTransactionString(transaction),
		  )
		: []

	return (
        
		<table class='w-3/4 mt-44 mx-auto border-2 border-primary border-collapse rounded-xl overflow-hidden shadow-md'>
			<thead>
				<tr class='bg-primary border-b border-pink-400'>
					<th class='px-4 py-2 text-center text-white'>Sender</th>
					<th class='px-4 py-2 text-center text-white'>Receiver</th>
					<th class='px-4 py-2 text-center text-white'>Amount</th>
					<th class='px-4 py-2 text-center text-white'>Change</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map((transaction, index) => (
					<tr
						key={index}
						class='border-b border-pink-400'>
						<td class='px-4 py-2 text-center'>{transaction.sender}</td>
						<td class='px-4 py-2 text-center'>{transaction.receiver}</td>
						<td class='px-4 py-2 text-center'>{transaction.amount}</td>
						<td class='px-4 py-2 text-center'>{transaction.change}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
