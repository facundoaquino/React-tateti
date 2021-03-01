import React, { useEffect, useState } from 'react'
import check from '../helpers/check'
import { Bannerwin } from './Bannerwin'

export const Dashboard = () => {
	const [turn, setTurn] = useState('O')
	const [card, setCard] = useState(undefined)
	const [finished, setFinished] = useState(false)

	const handlerTurn = (e) => {
		const isWritte = e.target.querySelector('p')

		if (isWritte) {
			setCard(e.target.querySelector('p'))
			setTurn(turn === 'X' ? 'O' : 'X')
		}
	}

	useEffect(() => {
		if (card && !card.innerHTML) card.innerHTML = turn
		const win = check(document.querySelectorAll('.draw'))
		if (win) {
			if (win === 'equal') {
                setTurn('Nobody')
			} else {
				console.log(`gano ${turn}`)
			}
			setFinished(true)
		}
	}, [card, turn])

	return (
		<>
			<Bannerwin winner={turn} endGame={finished} />
			<section onClick={handlerTurn} className="dashboard">
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
				<div className="card">
					<p className="draw"></p>
				</div>
			</section>
		</>
	)
}
