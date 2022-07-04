//all actions of the App
//actions are JavaScript objects
//every action has a property type
// Action creators are merly just functions that return in action 
import { database } from "../database/config"

export function startAddingPost(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
    }).catch((error) => {
        console.log(error)
    })
 }
}

export function startLoadingPost() {
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
           })
           dispatch(loadPosts(posts))
    }).catch((error) => {
        console.log(error)
    })
}
}

export function startRemovingPost(index, id) {
    const updates = { 
        [`posts/${id}`]: null , [`comments/${id}`]:null 
    }
    return (dispatch) => {
        return database.ref(`posts/${id}`).update().then(()=> {
            dispatch(removePost(index))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, postID) {
    return (dispatch) => {
        return database.ref(`comments/${postID}`).push(comment).then(() => {
            dispatch(addComment(comment, postID))
        }).catch((error) => {
            console.log(error)
        })
    }
}



export function startLoadingComments() {
    return(dispatch) => {
        return database.ref('comments').once('value').then((snapshot) => {
            let comments = {}
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        })
    }
}

export function loadComments(comments) {
    return {
        types: 'LOAD_COMMENTS',
        comments
    }

}

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

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
} 

export function loadPosts(posts) {
    return {
        type: 'LOAD_PHOTOS',
        posts
    }
}