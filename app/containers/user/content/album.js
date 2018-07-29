import React, {Component} from 'react'
import AlbumList from "../../../components/albumList";
import get from "../../../fetch/get";

class Albums extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            albums: []
        }
    }
    render(){
        return (
            <AlbumList data={this.state.albums}/>
        )
    }
    componentDidMount(){
        //fetch detail
        const result = get('https://jsonplaceholder.typicode.com/albums?userId=' + this.props.userId);
        result.then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(json => {
            this.setState({
                albums: json
            });
        }).catch(err => {
            console.log(err)
        });
    }
}

export default Albums