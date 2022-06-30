//connect store to main component
import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePost} from '../redux/actions';

function mapStateToProps(state) {
    return {
        posts: state
    }
}
//this.props.posts - gives access to state

//allows to write this.action in didmount
function mapDispatchToProps(dispatch) {
    return bindActionCreators({removePost}, dispatch)
}

//connecting to top-level component
const App = connect(mapStateToProps, mapDispatchToProps)(Main)


export default App