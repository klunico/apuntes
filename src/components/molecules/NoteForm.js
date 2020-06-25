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
      date: new Date(),
      subject: 'Write subject' , 
      body: 'Write body' 
    }
  );

	const handleChange = (event) => {
    setNote( 
      {
        subject: event.target.value,
        body: event.target.value,
      }
    );
	};

	const handleSubmit = (event) => {
		alert("Note was saved!");
    //redux dispatch (action)
    //dispatch(addNote(note))
    setNote({
      id: generate(),
      date: new Date(),
      subject: event.target.value,
      body: event.target.value,
    }
  );
		event.preventDefault();
	}

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  });

  useEffect(() => {
    const data = localStorage.getItem("note");
    if (data) {
      setNote(JSON.parse(data));
    }
  }, []);

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
