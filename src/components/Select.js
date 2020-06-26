import React, { useState, useContext } from 'react'
import { GlobalContext } from '../api/GlobalState'

function Select(props) {
	const [data, setData] = useState({
		questions: 10,
		difficulty: 'any'
	})


	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	props.data(data)
	// }

	const currentState = useContext(GlobalContext)

	function handleSubmit(e) {
		e.preventDefault()
		currentState.change(data)
		props.onClick()

	}
	

	return(

		<div className="form-container" onSubmit={handleSubmit}>
			<form>
				<div className="input-container">
					<label>How many Question: </label>
					<input className="input" defaultValue={currentState.datas.questions} onChange={ e => setData({...data, questions: e.target.value})} />
				</div>
				<div className="input-container">
					<label>Choose the difficulty level: </label>
					<select className="input" onChange={ e => setData({...data, difficulty: e.target.value }) }>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>
				<button className='btn'>Start Game</button>
			</form>
		</div>

		)
}


export default Select;