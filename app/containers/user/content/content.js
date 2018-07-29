import React, {Component} from 'react'
import Albums from './album';
import Posts from '../../posts/posts';
import Todos from "./todos";

class Content extends Component {
    render(){
        switch (this.props.data) {
            case 'todo':
                return (
                    <Todos userId = {this.props.userId}/>
                );
            case 'album':
                return (
                    <Albums userId = {this.props.userId}/>
                );
            case 'post':
                return (
                    <Posts userId = {this.props.userId}/>
                );
        };
    }
}

export default Content