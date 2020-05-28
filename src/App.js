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


  return (
    <AppStyle>
      <NoteHeader />
      <NoteDisplay />
      <NoteList />      
    </AppStyle>
  );
}

export default App;
