import React, {Component} from 'react'
import { Comment, Icon } from 'semantic-ui-react'

class Comments extends Component {
    render(){
        const comments = this.props.value.map((comment) =>
            <Comment key={comment.id}>
                <Comment.Content>
                    <Comment.Author>
                        <Icon color='blue' name='comment' /> {comment.name}
                    </Comment.Author>
                    <Comment.Metadata>
                        {comment.email}
                    </Comment.Metadata>
                    <Comment.Text>
                        <p>{comment.body}</p>
                    </Comment.Text>
                </Comment.Content>
            </Comment>
        );

        return (
            <Comment.Group>
                {comments}
            </Comment.Group>
        );

    }
}

export default Comments