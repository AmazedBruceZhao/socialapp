import React, {Component} from 'react';
import List from '../../components/list.js'

class Posts extends Component{
	constructor(props, context){
		super(props, context)
		this.state = {
			posts: ['post1', 'post2']
		}
	}
	render(){
		return (
				<List value={this.state.posts}></List>
		)
	}
	componentDidMount(){
		//fetch
		//update state
	}
}

export default Posts