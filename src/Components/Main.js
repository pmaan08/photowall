import React, {Component} from "react";
import Title from './Title';
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto"; 
import {Link, Route} from 'react-router-dom';
import {removePost} from '../redux/actions';
import Single from "./Single";


// const posts = [{
//     id: "0",
//     description: "beautiful landscape",
//     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//     "3919321_1443393332_n.jpg"
//     }, 
//     {
//     id: "1",
//     description: "Aliens???",
//     imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
//     },
//      {
//     id: "2",
//     description: "On a vacation!",
//     imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//     }]

//declare array as a state


class Main extends Component {
    constructor() {
        super()
    }
       /* this.state = {
            posts: [ {
                id: 0,
                description: "beautiful landscape",
                imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
                }, 
                {
                id: 1,
                description: "Aliens???",
                imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
                },
                 {
                id: 2,
                description: "On a vacation!",
                imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
                }] 
         //       screen: 'photos' //photos, addPhoto
        } */
        //to reference the this. as a funxtion in removePhoto 
        // this.removePhoto = this.removePhoto.bind(this)
       // this.navigate = this.navigate.bind(this)
    
    
/*  replced by actions for Redux
    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: this.state.posts.filter(post => post !== postRemoved )
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat(postSubmitted)
        }))
    }

   /* navigate() {
        this.setState({
            screen: 'addPhoto'
        })
    }
  
*/    //invoked immediately after component is inserted in the dom -lifecycles  method
    //fetches data from external API 
    //componentDidMount() { 
      //  this.props.removePost(1)
        // const data  = SimulateFetchFromDatabase()
       //this.setState({
        //posts: data 
       //})
    //}

    // when state is re-rendered
    componentDidUpdate(prevProps, prevState) {
    
    }
    //render method in nature  should never  return asynchronous code, Ajax request,etc
    //only render UI acc to props and states.
    //this.state.screen === 'photos' && ( logic for screen)
    //routing method
    // for multiple component use render prop or else single component use component prop
    render() {
        return (
        <div> 
            <h1> 
                <Link to="/"> PhotoWall </Link>
            </h1>
                <Route exact path = "/" render = {() => (
                    <div>
                        <PhotoWall {...this.props} /> 
                    </div>
                )}/>  
                
                <Route path = "/AddPhoto" render = {({history}) => (
                    <AddPhoto {...this.props} onHistory = {history}/>   
                )}/>

                <Route path="/single/:id" render = {(params) => (
                     <Single {...this.props} {...params} />                 
                )}/>
        </div> 
        )
    }
}
///posts = props.post , remove = posts.remove .... for {...this.props}
/*<PhotoWall posts = {this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>*/


// if data needs to be fetched from external API.

//function SimulateFetchFromDatabase() {
//     return [ {
//        id: "0",
//        description: "beautiful landscape",
//        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//        "3919321_1443393332_n.jpg"
//        }, 
//        {
//        id: "1",
//        description: "Aliens???",
//        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
//        },
//         {
//        id: "2",
//       description: "On a vacation!",
//        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//        }]       
//}

export default Main 