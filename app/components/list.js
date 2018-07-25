import React, {Component} from 'react';

class List extends Component{
	constructor(props, context){
		super(props, context)
		
	}
	render(){
		
		const list = this.props.value.map((user, index) => 
			<li key={index}>{user}</li>
		)
		return (
			
				<ul>
					{list}
				</ul>
			
		)
	}
}

export default List