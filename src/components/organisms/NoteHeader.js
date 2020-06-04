import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const HeaderDiv = styled.div`
  min-height: 20vh;
  min-width: 100vw;
  background-color: green;
`;

function NoteHeader() {
	return (
		<HeaderDiv>
			<Header as='h1'>First Header</Header>
		</HeaderDiv>
		);
}

export default NoteHeader;
