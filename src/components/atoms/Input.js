import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  font-size: calc(10px + 1vmin);
  background-color:orange;
  border-radius: 5px;
  border: 4px solid lightblue;
`;

function Input({type, value}) {
	return <InputStyle type={type} defaultValue={value} />;
}

export default Input;
