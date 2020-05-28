import React from 'react';
import Note from '../molecules/Note';
import styled from 'styled-components';

const List = styled.div`
  min-height: 80vh;
  min-width: 30vw;
  background-color: blue;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;


function NoteList() {

	const notes = [
	{id: 1, subject: 'First note', body: 'The first note of the list.'},
	{id: 2, subject: 'Second note', body: 'The second note of the list.'},
	{id: 3, subject: 'third note', body: 'The third note of the list.'},
	{id: 4, subject: 'fourth note', body: 'The fourth note of the list.'},
	{id: 5, subject: 'fifth note', body: 'The fifth note of the list.'},
	{id: 6, subject: 'sixth note', body: 'The fifth note of the list.'},
	{id: 7, subject: 'seventh note', body: 'The fifth note of the list.'},
	{id: 8, subject: 'eigth note', body: 'The fifth note of the list.'},
	{id: 9, subject: 'nineth note', body: 'The fifth note of the list.'},
	];


	return (
		<List>
        <Note notes={notes} />
     </List>
	);
}

export default NoteList;