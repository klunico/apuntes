import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';


const Textarea = styled.textarea`
	min-height: 40vh;
  min-width: 70%;
  font-size: calc(10px + 1vmin);
  background-color: grey;
`;

const Label = styled.label`
  font-size: calc(10px + 2vmin);
`;

const NoteForm = (props) => {

 	const [note, setNote] = useState(
			'Write down your note here...'
 	);

	const handleChange = (event) => {
		setNote( event.target.value );
	}

	const handleSubmit = (event) => {
		alert("Note was saved!");
		event.preventDefault();
	}

	return (
    	<form onSubmit={handleSubmit}>
    		<Label>
    			Apunte:
    			<br />
  				<Textarea
  					value={note} 
  					onChange={handleChange} />
    		</Label>
    			<br />
    		<Input type={'submit'} value={'Save'} />
    	</form>
	);
}

export default NoteForm;