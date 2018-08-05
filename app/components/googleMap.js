import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

class Map extends Component{
    constructor(props){
        super(props);

    }
    render(){

        return (
            <div style={{ height: '200px', width: '200px' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                </GoogleMapReact>
            </div>
        )
    }
}
Map.defaultProps = {
    defaultCenter: {
        lat: 0, lng:0
    },
    defaultZoom: 10
};
export default Map