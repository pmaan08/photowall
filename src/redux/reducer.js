import posts from '../data/posts'
import { combineReducers } from 'redux';
//reducer is a function
//we use 'swtch' instead of setState as it will make it a impure function

function comments(state=[], action) {

    switch (action.type) {
        case 'ADD_COMMENT': return [...state, action.comment]//add commment to current comment state
        default: return state
    }
    return state
}

function allPosts(state = posts, action) {
    //actions  
    console.log(action.index)
    
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)] //returning array of post without the removed photo
        case 'ADD_POST': return [...state, action.post]
        default: return state
    } 
}

const rootReducer = combineReducers({allPosts, comments})


export default rootReducer