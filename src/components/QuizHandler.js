import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../api/GlobalState'
import Questions from './Question'



function QuizHandler(){
	const context = useContext(GlobalContext)
	const [ quiz, setQuiz] = useState('')


	const url = `https://opentdb.com/api.php?amount=${context.datas.questions}&difficulty=${context.datas.difficulty}`

	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(data => setQuiz(data))
	}, [])
	function fiveSecond() {
		return new Promise( resolve => {
			setTimeout(() => {
				resolve()
				console.log('waiting')
			}, 5000);
		})
	}
	
	async function loadQuiz() {
		try {

			for(let x = 0; x <= quiz.results.length - 1; x++) {
				await fiveSecond();
				console.log(quiz.results[x])
				// return <h1>{ quiz.results[x].category }</h1>
				// <Questions obj={quiz.results[x]} key={x} />
			}
			
		} catch (error) {
			console.log(error)
		}
	}


	return(
			<div>
				{
					quiz.response_code !== 0 ? <h1>Loading...</h1> :  loadQuiz()

				}
			</div>
		)


}


export default QuizHandler;