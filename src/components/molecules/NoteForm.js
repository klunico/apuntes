import React, { useState,useEffect } from 'react';

import styled from 'styled-components';
import { generate } from 'shortid';

import Input from '../atoms/Input.js';


const Textarea = styled.textarea`
	min-height: 40vh;
  min-width: 70%;
  font-size: calc(10px + 1vmin);
  background-color: grey;
`;

const Label = styled.label`
  font-size: calc(10px + 2vmin);
`;

const aId = generate();

const NoteForm = (props) => {

  const [note, setNote] = useState(
    {
      id: aId, 
      subject: 'Write subject' , 
      body: 'Write body' 
    });

	const handleChange = (event) => {
		setNote( event.target.value );
	};

	const handleSubmit = (event) => {
		alert("Note was saved!");
		event.preventDefault();
	}

  useEffect(() => {
    console.log("This is the useEffect GET localStorage.getItem.")
    const data = localStorage.getItem("note");
    if (data) {
      setNote(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    console.log("This is the useEffect SET localStorage.setItem.")
    localStorage.setItem("note", JSON.stringify(note));
  });

	return (
    	<form onSubmit={handleSubmit}>
    		<Label>
    			Apunte:
    			<br />
    		  <Input 
            type={'text'} 
            value={note.subject} 
            onChange={handleChange} 
            onfocus=""          
          />
          <br />
  				<Textarea
  					value={note.body} 
  					onChange={handleChange} 
            onfocus=""
            required
          />
    		</Label>
    			<br />
        <Input 
          type={'submit'} 
          defaultValue={'Save'} 
        />
    	</form>
	);
}

export default NoteForm;
