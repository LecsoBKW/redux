import React, {Component} from 'react';
import Row from './Row';
/*
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            newTodo : ""
        };
    }

    inputValueChanged(e) {
       this.setState({newTodo:e.target.value});
    }

    createNewLine() {
        if(this.state.newTodo != "") {
            var oldTodos = JSON.parse(JSON.stringify(this.state.todos));
            oldTodos.push(this.state.newTodo);
            this.setState({todos:oldTodos, newTodo:""});
        }
    }

    deleteLine(id) {
        let oldTodos = JSON.parse(JSON.stringify(this.state.todos));
        oldTodos.splice(id, 1);
        this.setState({todos:oldTodos});
    }


    render() {
        var myTodos = [];
        for(let i = 0; i < this.state.todos.length; i++) {
            myTodos.push((<Row
            todoText={this.state.todos[i]}
            key={i}
            keyVal={i}
            deleteLine={this.deleteLine.bind(this)}
            />));
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-4">
                        <div className="form-group">
                            <input className="form-control" value={this.state.newTodo} onChange={(e)=>this.inputValueChanged(e)} type="Text"/>
                        </div>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-success" type="button" onClick={()=>this.createNewLine()}>Send</button>
                    </div>
                    <div className="col-xs-6"/>
                </div>
            {myTodos}
            </div>
        )
    }
}*/

export default App
