//all posts passed into it as props
//import React, {Component} from 'react';
import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//anchor tags , href attributes allow you to create hyperlinks between one page and another

//state-less function
function PhotoWall(props) {
    return  <div>
            < Link className = "addIcon"  to="/AddPhoto" >  </Link>   
            {/*<button onClick = {props.onNavigate} className='addIcon'>  </button>*/}
            <div className= "photoGrid">
                 {props.posts.map((post, index) => <Photo key={index} post = {post} onRemovePhoto = {props.onRemovePhoto} />) }
            </div>
            </div>        
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
} 

//class PhotoWall extends Component {
//    render() {
//        return <div className= "photoGrid">
//                {this.props.posts.map((post, index) => <Photo key={index} post = {post}/>) }
//               </div>
//    }
//}



export default PhotoWall