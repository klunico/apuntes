import React from 'react';
import styled from 'styled-components';

import NoteHeader from './components/organisms/NoteHeader.js';
import NoteList from './components/organisms/NoteList.js';
import NoteDisplay from './components/organisms/NoteDisplay.js';

<<<<<<< HEAD
// localStorage an redux anbinden (redux-localStorage library)
=======
import notes from './notes.js';

// import NoteAPI from './NoteAPI'
>>>>>>> 74ab7731cbe482e0f49b6f4933ee0023b924a0dd

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row wrap;
`;

function App() {

<<<<<<< HEAD
  return (
    <AppStyle>
      <NoteHeader />
      <NoteDisplay />
      <NoteList />      
=======
const notes = notes;

  return (
    <AppStyle>
      <NoteHeader />
      <NoteDisplay id='0' subject='testSubject' body='testBody' />
      <NoteList notes={notes} />
>>>>>>> 74ab7731cbe482e0f49b6f4933ee0023b924a0dd
    </AppStyle>
  );
}

export default App;
