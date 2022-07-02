import posts from '../data/posts'
//reducer is a function
//we use 'swtch' instead of setState as it will make it a impure function

const postReducer = function allPosts(state = posts, action) {
    //actions  
    console.log(action.index)
    
    switch (action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)] //returning array of post without the removed photo
        case 'ADD_POST': return [...state, action.post]
        default: return state
    } 
}



export default postReducer