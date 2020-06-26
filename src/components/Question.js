import React from 'react';

function Question({obj}) {
	console.log('InOBJ', obj)
	return(
			<div>{ obj.question }</div>
		)
}

export default Question;
