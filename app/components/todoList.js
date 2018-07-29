import React, {Component} from 'react'

class Todos extends Component {
    render(){
        const todos = this.props.data.map((todo) =>
            <input key={todo.id} type='checkbox' {todo.completed ? 'checked' : ''} />{todo.title}<br/>
        );

        return (
            <div>
                {todos}
            </div>
        );

    }
}

export default Todos