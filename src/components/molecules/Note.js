import React from 'react';
import styled from 'styled-components';

const NoteStyle = styled.div `
	text-align: left;
	background-color: pink;
	border: medium solid violet;
	border-radius: 5px;
	margin: 8px;
	padding: 8px;
`;

function Note(props) {

	const note = props.notes.map((note) =>
		<NoteStyle key={note.id}>
			<h3>{note.subject}</h3>			
			<p>{note.body}</p>
		</NoteStyle>
	);

	return (
		<div>
			{note}
		</div>
	);
}

export default Note;