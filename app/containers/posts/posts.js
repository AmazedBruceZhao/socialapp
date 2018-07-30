import React, {Component} from 'react'
import List from '../../components/list.js'
import get from '../../fetch/get.js'
import Header from "../../components/header";


class Posts extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			posts: []
		};
	}
	render(){
		return (
			<div>
				<List value={this.state.posts} />
            </div>
		)
	}
	componentDidMount(){
		//fetch
		const result = 'userId' in this.props ? get('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.userId) : get('https://jsonplaceholder.typicode.com/posts');
		result.then(res => {
            if (res.ok) {
                return res.json()
            }
		}).then(json => {
			const map = {};
			const list = [];
			//init fetch user
			json.map((post) => {
				if (post.userId !== undefined && !(post.userId in map)){
                    map[post.userId] = 'Anonymous';
                    list.push(get('https://jsonplaceholder.typicode.com/users/' + post.userId).then((res) => {
                        return res.json()}))
				}
			});

			//map userid => name
			Promise.all(list).then((results) => {
				results.map((user) => {
					map[user.id] = user.name;
				});
			// add user name
             json.map((post) => {
                 post.userName = map[post.userId]
             });
             //update state
             this.setState({
				 posts: json
			 });
		});

		}).catch(err => {
            console.log(err)
        })

	}
}

export default Posts