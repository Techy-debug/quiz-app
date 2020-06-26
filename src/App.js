
import React, { useState, useEffect, useContext } from 'react';
import GlobalProvider from './api/GlobalState'
import { GlobalContext } from './api/GlobalState'



import Header from './components/Header'
import Select from './components/Select'
import Question from './components/Question'
import QuizHandler from './components/QuizHandler'

function App() {

	const [ changeScreen, setChangeScreen ] = useState(false)
	const context = useContext(GlobalContext)



	console.log('rendering')


	function handleClick() {
		setChangeScreen(true)
	}

	if(!changeScreen){
		return(
				<GlobalProvider>
					<Header />
					<Select
						onClick={handleClick}
					 />
				</GlobalProvider>
			)	
	}




	return (
			<GlobalProvider>
				<Header />
				{
					context.datas === undefined ? 'Nothing' : <QuizHandler />
				}
			</GlobalProvider>
		)

}

export default App;