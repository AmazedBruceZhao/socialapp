import React, {Component} from 'react'
import Post from '../containers/post/post.js'
import { Comment } from 'semantic-ui-react'

class List extends Component{
	render(){
		const list = this.props.value.map((post, index) =>
				<Post key = {index} post = {post}/>
		);
		return (
				<Comment.Group>
					{list}
				</Comment.Group>
		)
	}
}

export default List