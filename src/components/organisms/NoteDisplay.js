import React from 'react';
import styled from 'styled-components';
import NoteForm from '../molecules/NoteForm.js';
import Note from '../molecules/Note.js';

const DisplayStyle = styled.div`
	min-height: 80vh;
	min-width: 70vw;
	background-color: red;
`;

function NoteDisplay({id, subject, body}) {

	const showDisplay = () => {
	//if(condition) note is selected show note
		if(id!==0) {
			return <Note id={id} subject={subject} body={body} />
	//else show noteform
		} else {
			return <NoteForm />
		}
	} 
	
			// <NoteForm />
			// <Note id={id} subject={subject} body={body} />

	return (
		<DisplayStyle>
			{showDisplay}	
		</DisplayStyle>
	);
}

export default NoteDisplay;