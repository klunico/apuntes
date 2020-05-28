import React from 'react';
import styled from 'styled-components';

	const Header = styled.div`
	  font-size: calc(10px + 2vmin);
	  min-height: 20vh;
	  min-width: 100vw;
	  background-color: green;
	`;
	
function NoteHeader() {


	return (
		  <Header>
        <h3>
          Header 
        </h3>
      </Header>
	);
}

export default NoteHeader;