import posts from '../data/posts'
import { combineReducers } from 'redux';
//reducer is a function
//we use 'swtch' instead of setState as it will make it a impure function

function comments(state={}, action) {

    switch (action.type) {
        case 'ADD_COMMENT': 
        
        if (!state[action.postID]) {
            return {...state, [action.postId]: [action.comment]}
        } else {
            return {...state, [action.postID]: [...state[action.postID], action.comment]}
        }

        case 'LOAD_COMMENTS': return action.comments
       //add commment to current comment state
        default: return state
    }
    return state
}

function allPosts(state = posts, action) {
    //actions      
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)] //returning array of post without the removed photo
        case 'ADD_POST': return [...state, action.post]
        case 'LOAD_PHOTOS': return action.posts //return payload as updated state
        default: return state
    } 
}

const rootReducer = combineReducers({allPosts, comments})


export default rootReducer