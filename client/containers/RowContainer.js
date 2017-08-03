import { connect } from 'react-redux';
import Row from '../components/Row';
import { deleteRow } from "../actions/actions"

const mapStateToProps = state => {
  return {  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleterow : (id) => dispatch(deleteRow(id))
  }
}


const RowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Row)

export default RowContainer
