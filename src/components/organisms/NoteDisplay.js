import React from 'react';
import styled from 'styled-components';
import NoteForm from '../molecules/NoteForm';

const DisplayStyle = styled.div`
	min-height: 80vh;
	min-width: 70vw;
	background-color: red;
`;

function NoteDisplay() {

	return (
		<DisplayStyle>
		<NoteForm />
		</DisplayStyle>
	);
}

export default NoteDisplay;