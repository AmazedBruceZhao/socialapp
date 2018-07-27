import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class List extends Component{
	constructor(props, context){
		super(props, context)
		
	}
	render(){
		
		const list = this.props.value.map((post, index) =>
				<div key={post.id}>
					<Link to={'/users/' + post.userId}>{post.userId}</Link>
					<div>{post.title}</div>
                    <div>{post.body}</div>
				</div>
		)
		return (
			
				<ul>
					{list}
				</ul>
			
		)
	}

}

export default List