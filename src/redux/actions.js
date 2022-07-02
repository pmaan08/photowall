//all actions of the App
//actions are JavaScript objects
//every action has a property type
// Action creators are merly just functions that return in action 

//remove
export function removePost(index) {
    return {
        type: 'REMOVE_POST', 
        index
    }
}

//adding post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}