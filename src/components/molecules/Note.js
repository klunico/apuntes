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

function Note({id, subject, body}) {

	return (
		<NoteStyle key={id}>
			<h3>{subject}</h3>			
			<p>{body}</p>
		</NoteStyle>
	)
}

export default Note;