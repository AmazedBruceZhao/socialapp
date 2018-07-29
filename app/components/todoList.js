import React, {Component} from 'react'
import { Checkbox } from 'semantic-ui-react'

class TodoList extends Component {
    render(){
        const todos = this.props.data.map((todo) =>
            <div key={todo.id} >
                <Checkbox defaultChecked={todo.completed} label={todo.title} />
            </div>
        );
        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default TodoList