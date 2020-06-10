import React from 'react';
import styled from 'styled-components';

import NoteHeader from './components/organisms/NoteHeader.js';
import NoteList from './components/organisms/NoteList.js';
import NoteDisplay from './components/organisms/NoteDisplay.js';

import notes from './notes.js';

// import NoteAPI from './NoteAPI'

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row wrap;
`;

function App() {

const notes = notes;

  return (
    <AppStyle>
      <NoteHeader />
      <NoteDisplay id='0' subject='testSubject' body='testBody' />
      <NoteList notes={notes} />
    </AppStyle>
  );
}

export default App;
