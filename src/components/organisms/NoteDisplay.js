import React from 'react';
import styled from 'styled-components';
import NoteForm from '../molecules/NoteForm.js';
// import Note from '../molecules/Note.js';

const DisplayStyle = styled.div`
	min-height: 80vh;
	min-width: 70vw;
	background-color: red;
`;

function NoteDisplay({id, subject, body}) {

	// const showDisplay = () => {
	// //if(condition) note is selected show note
	// 	if(id!==0) {
	// 		return <Note id={id} subject={subject} body={body} />
	// //else show noteform
	// 	} else {
	// 		return <NoteForm />
	// 	}
	// } 
	
			// <Note id={id} subject={subject} body={body} />
			// {showDisplay}	

	return (
		<DisplayStyle>
			<NoteForm />
		</DisplayStyle>
	);
}

export default NoteDisplay;
