import React, {Component} from 'react'
import Map from "./googleMap";

class Address extends Component {
    render(){
        const data = this.props.data;
        return (
            <div>
                <ul>
                    <li>Street: {data.street}</li>
                    <li>Suite: {data.suite}</li>
                    <li>City: {data.city}</li>
                    <li>Zip: {data.zipcode}</li>
                    {
                        <Map center = {{lat: Number(data.geo.lat), lng:Number(data.geo.lng)}} />
                    }
                </ul>
            </div>
        );

    }
}

export default Address