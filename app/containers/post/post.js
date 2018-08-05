import React, {Component} from 'react'
import {Link} from "react-router-dom"
import Comments from '../../components/comments.js'
import get from "../../fetch/get";
import { Comment, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types';

class Post extends Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            comments: []
        }

    }
    render() {
        const post = this.props.post;
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author><Link to={'/users/' + post.userId}><Icon color='blue' name='user' /> {post.userName}</Link></Comment.Author>
                    <Comment.Text>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </Comment.Text>
                    <Comment.Actions>
                        <a onClick={buttonClick.bind(this)}>Comments</a>
                    </Comment.Actions>
                </Comment.Content>
                <Comments value={this.state.comments} />
            </Comment>
        )
    }
}

function buttonClick(e){
    //e.preventDefault();
    if (this.state.comments.length > 0) {
        this.setState({
            comments: []
        });
        return;
    }
    //fetch comments
    const result = get('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.post.id);
    result.then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(json => {
        this.setState({
            comments: json
        });
    }).catch(err => {
        console.log(err)
    });
}

Post.propTypes = {
    post: PropTypes.object,
};

export default Post