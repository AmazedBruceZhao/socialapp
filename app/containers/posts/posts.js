import React, {Component} from 'react'
import List from '../../components/list.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import get from '../../fetch/get.js'
import * as postActions from '../../actions/post.js'

class Posts extends Component{
	constructor(props, context){
		super(props, context)

	}
	render(){
		return (
				<List value={this.props.posts}></List>
		)
	}
	componentDidMount(){
		//fetch
		const result = get('https://jsonplaceholder.typicode.com/posts')
		result.then(res => {
            if (res.ok) {
                return res.json()
            }
		}).then(json => {
            //update state
            this.props.postActions.fetchAll(json)
		}).catch(err => {
            console.log(err)
        })

	}
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postActions: bindActionCreators(postActions, dispatch)
    }
}
export default Posts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts)