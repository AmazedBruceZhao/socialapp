import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class List extends Component{
	constructor(props, context){
		super(props, context)
		
	}
	render(){
		
		const list = this.props.value.map((user, index) => 
			<li key={index}><Link to={'/users/' + index}>{user}</Link></li>
		)
		return (
			
				<ul>
					{list}
				</ul>
			
		)
	}
}

export default List