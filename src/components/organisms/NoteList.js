import React from 'react';
import Note from '../molecules/Note.js';
import styled from 'styled-components';

const List = styled.div`
  min-height: 80vh;
  min-width: 30vw;
  background-color: blue;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

function NoteList({ notes }) {

	const renderList = notes.map((note) =>  
			<Note id={note.id} subject={note.subject} body={note.body} />
		);
		
	return ( 
			<List>
				{renderList}	
			</List>
	);
};

export default NoteList;
