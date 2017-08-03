import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppContainer from './containers/AppContainer'
import TodoReducer from './reducers/TodoReducer'

    let store = createStore(TodoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.getElementById('app')
    )
