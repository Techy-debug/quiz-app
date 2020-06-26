import React, { useReducer, createContext } from 'react'



const initialStatus = {
	datas: {
		questions: 20,
		difficulty: 'easy'
	}
}


const reducer = (state, action) => {
	switch(action.type){
		case 'change':
			
			return {
				datas: action.payload
			}

		case 'quiz':
			console.log('Payload', action.payload)
			return {
				datas:initialStatus,
				quiz: action.payload
			}
		default:
			return initialStatus
	}

}




export const GlobalContext = createContext(initialStatus)

function GlobalState({children}) {

	const [ state, dispatch ] = useReducer(reducer, initialStatus)

	const change = changeData => {

		dispatch({
			type: 'change',
			payload: changeData
		})
	}

	const quizData = quiz => {

		dispatch({
			type: 'quiz',
			payload: quiz
		})
	}

	return(
			<GlobalContext.Provider value={{ datas: state.datas, dispatch, change, quizData }}>
			{ children }
			</GlobalContext.Provider>
		)


}

export default GlobalState;

