export default function(state, action) {
    if (state === undefined) {
        return[]
    }

    switch(action.type){
    	case 'SET_NOTES':
    		return action.payload;
    	default:
    		return state;
    }

    // if (action.type === 'SET_NOTES'){
    //     return action.payload;
    // } else {
    //     return state;
    // }
}
