import React from 'react';
import styled from 'styled-components';

import NoteHeader from './components/organisms/NoteHeader';
import NoteList from './components/organisms/NoteList';
import NoteDisplay from './components/organisms/NoteDisplay';

// import NoteAPI from './NoteAPI'

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row wrap;
`;

function App() {
  
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
    <AppStyle>
      <NoteHeader />
      <NoteDisplay />
      <NoteList notes={notes} />      
    </AppStyle>
  );
}

export default App;
