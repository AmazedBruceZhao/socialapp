import React, {Component}from 'react'
import Detail from "../../components/detail";
import get from "../../fetch/get";
import Content from "./content/content";
import { Menu, Icon } from 'semantic-ui-react'

class User extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            id: this.props.match.params.id,
            detail: {},
            content: 'todo'
        }
    }
    render() {
        return (
            <div>
                <Detail data = {this.state.detail}/>
                <Menu fluid widths={3}>
                    <Menu.Item name='todo' active={this.state.content === 'todo'} onClick={() => {this.setState({content: 'todo'})}}>
                        <Icon name='list' />
                        Todo
                    </Menu.Item>
                    <Menu.Item name='album' active={this.state.content === 'album'} onClick={() => {this.setState({content: 'album'})}}>
                        <Icon name='record' />
                        Albums
                    </Menu.Item>
                    <Menu.Item name='post' active={this.state.content === 'post'} onClick={() => {this.setState({content: 'post'})}}>
                        <Icon name='comments' />
                        Posts
                    </Menu.Item>
                </Menu>
                <div>
                    <Content data = {this.state.content} userId = {this.state.id}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        //fetch detail
        const result = get('https://jsonplaceholder.typicode.com/users/' + this.state.id);
        result.then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(json => {
            this.setState({
                detail: json
            });
        }).catch(err => {
            console.log(err)
        });
    }
}

export default User