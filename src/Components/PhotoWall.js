//all posts passed into it as props
//import React, {Component} from 'react';
import React from 'react';
import Photo from './Photo';

//state-less function
function PhotoWall(props) {
    return  <div className= "photoGrid">
                 {props.posts.map((post, index) => <Photo key={index} post = {post}/>) }
            </div>
}



//class PhotoWall extends Component {
//    render() {
//        return <div className= "photoGrid">
//                {this.props.posts.map((post, index) => <Photo key={index} post = {post}/>) }
//               </div>
//    }
//}



export default PhotoWall