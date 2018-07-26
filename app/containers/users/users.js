import React, {Component} from 'react';
import List from '../../components/list.js'

class Users extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			userlist: ['user1', 'user2']
		}
	}
	render(){
		return (
				<List value={this.state.userlist}></List>
		)
	}
	componentDidMount(){
		//fetch
		//update state
	}
}

export default Users