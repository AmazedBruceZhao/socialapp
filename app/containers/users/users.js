import React, {Component} from 'react';
//import styles from '../static/test.css'
import List from '../../components/list.js'

class Users extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			userlist: ['asd', 'dsa']
		}
	}
	render(){
		return (
				<List value={this.state.userlist}></List>
		)
	}
	comopentDidMount(){
		//fetch
		//update state
	}
}

export default Users