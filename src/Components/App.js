//connect store to main component
import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePost} from '../redux/actions';
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';
import Comments from './Comments';

function mapStateToProps(state) {
    return {
        posts: state.allPosts,
        comments: state.comments
    }
}
//this.props.posts - gives access to state

//allows to write this.action in didmount
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

//connecting to top-level component
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))


export default App