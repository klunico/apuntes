import React from 'react';
import Note from '../molecules/Note.js';
import styled from 'styled-components';
import { notes } from './../../notes';
import { bindActionCreators } from 'redux';
import setNotes from '../../actions/index';
// src/actions/index.js


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

function mapDispatchToProps(dispatch){
	return bindActionCreators(
		{ setNotes: setNotes },
		dispatch
	);
}

export default NoteList;
// export default connect(null, mapDispatchToProps)(NoteList);
