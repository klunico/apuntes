import React from 'react';
import styled from 'styled-components';

import NoteHeader from './components/organisms/NoteHeader.js';
import NoteList from './components/organisms/NoteList.js';
import NoteDisplay from './components/organisms/NoteDisplay.js';

// localStorage an redux anbinden (redux-localStorage library)

const AppStyle = styled.div`
  text-align: center;
  display: flex;
  flex-flow: row wrap;
`;

function App() {

  return (
    <AppStyle>
      <NoteHeader />
      <NoteDisplay />
      <NoteList />      
    </AppStyle>
  );
}

export default App;
