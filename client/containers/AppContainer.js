import { connect } from 'react-redux';
import App from '../components/App';
import { addTodo } from '../actions/actions'
import { valueChanged } from "../actions/actions"
import RowContainer from '../containers/RowContainer'

const mapStateToProps = state => {
  return {
    todos : state.todos,
    newTodo : state.newTodo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addtodo : () => { dispatch(addTodo()) },
    inputValueChanged : (e) =>  { dispatch(valueChanged(e.target.value)) }
  }
}


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
