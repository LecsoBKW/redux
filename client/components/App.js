import React from 'react'
import { connect } from 'react-redux'
import RowContainer from '../containers/RowContainer'

const App = ({todos, newTodo, addtodo, inputValueChanged}) => (
      <div className="container">
          <div className="row">
              <div className="col-xs-4">
                  <div className="form-group">
                      <input className="form-control" value={newTodo} onChange={inputValueChanged} type="Text"/>
                  </div>
              </div>
              <div className="col-xs-2">
                  <button className="btn btn-success" type="button" onClick={addtodo}>Send</button>
              </div>
              <div className="col-xs-6"/>
          </div>
          {todos.map((todo, index) => (<RowContainer key={index} todoText={todo} keyVal={index} />))}
      </div>
)

export default App
