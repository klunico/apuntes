import React from 'react';
import Note from '../molecules/Note.js';
import styled from 'styled-components';
import { notes } from './../../notes';


const List = styled.div`
  min-height: 80vh;
  min-width: 30vw;
  background-color: blue;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;


function NoteList(props) {

	const renderList = notes.map((note) =>  
			<Note key={note.id} subject={note.subject} body={note.body} />
		);
		
	return ( 
			<List>
				{renderList}	
			</List>
	);
};

export default NoteList;
