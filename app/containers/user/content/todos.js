import React, {Component} from 'react'
import TodoList from '../../../components/todoList'
import get from "../../../fetch/get";

class Todos extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: []
        }
    }
    render(){
        return (
            <div>
                <TodoList data={this.state.todos}/>
            </div>
        )
    }
    componentDidMount(){
        //fetch detail
        const result = get('https://jsonplaceholder.typicode.com/todos?userId=' + this.props.userId);
        result.then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(json => {
            this.setState({
                todos: json
            });
        }).catch(err => {
            console.log(err)
        });
    }
}

export default Todos