export default {
	getNote : () => {
		return fetch('/note')
							.then(res => res.json())
							.then(data => data);
	},
	deleteNote : (_id) => {
		return fetch(`/note/${_id}`,
							{method : 'delete'})
							.then(res => res.json())
							.then(data => data);
	},
	updateNote : (note) => {
		return fetch(`/note/${note._id}`,
							{method : "put",
							body : JSON.stringify(note),
							headers : {
								"Content-Type" : "application/json"
							}})
							.then(res => res.json())
							.then(data => data);
	},
	createNote : (note) => 
		return fetch('/note',
							{method : "post ",
							body : JSON.stringify(note),
							headers : {
								"Content-Type" : "application/json"
							}})
							.then(res => res.json())
							.then(data => data);
}