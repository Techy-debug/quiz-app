import React, { useContext } from 'react'
import { GlobalContext } from '../api/GlobalState'

function MapQuiz() {

	const context = useContext(GlobalContext)
	console.log(context)



}

export default MapQuiz