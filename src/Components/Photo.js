//import React, {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';

//stateless function componenet
function Photo(props) {
        const post = props.post
        return <figure className='figure'>
                   <Link to={`/single/${post.id}`}>
                      <img className = 'photo' src= {post.imageLink} alt = {post.description} />
                   </Link>
                   <figcaption> <p> {post.description} </p></figcaption>
                   <div className='button-container'>
                      <button onClick = {() => {
                       props.startRemovingPost(props.index, post.id)
                       props.history.push('/')
                      }}> Remove </button>
                      <Link className="button" to={`/single/${post.id}`}>
                         <div className='comment-count'>
                            <div className='speech-bubble'> </div>
                            {props.comments[post.id] ? props.comments[post.id].length : 0}
                         </div>
                      </Link>
                   </div>
                   
               </figure>
}

/* use it if a deeply nested component - injecting state into child component
function mapStateToProps(state) {
  return {
      posts: state
  }
}*/

//fn.property = { ..object..}
Photo.propTypes = {
  post: PropTypes.object.isRequired,
  //onRemovePhoto: PropTypes.func.isRequired
} 


//class Photo extends Component{
//    render () {
//        const post = this.props.post
//        return <figure className='figure'>
//                   <img className = 'photo' src= {post.imageLink} alt = {post.description} />
//                   <figcaption> <p> {post.description} </p></figcaption>
//                   <div className='button-container'>
//                   <button className='remove-button'> Remove </button>
//                   </div>
//                   
//               </figure>
//    }
//}

//export default connect(mapStateToProps)(Photo)
export default Photo