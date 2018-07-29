import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react'

class Map extends Component{
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

export default Map