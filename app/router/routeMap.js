import React from 'react'
import { BrowserRouter} from 'react-router-dom'


import App from '../containers/app.js'



class RouteMap extends React.Component {
    
    render() {
        return (
             <BrowserRouter history={this.props.history}>
             	<App />
            </BrowserRouter>
        )
    }
}

export default RouteMap