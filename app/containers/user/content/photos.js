import React, {Component} from 'react'
import get from "../../../fetch/get";
import PhotoList from "../../../components/photoList";

class Photos extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            photos: []
        }
    }
    render(){
        return (
            <div>
                <PhotoList data={this.state.photos}/>
                <hr/>
            </div>
        )
    }
    componentDidMount(){
        //fetch
        const result = get('https://jsonplaceholder.typicode.com/photos?albumId=' + this.props.albumId);
        result.then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(json => {
            this.setState({
                photos: json
            });
        }).catch(err => {
            console.log(err)
        });
    }
}

export default Photos