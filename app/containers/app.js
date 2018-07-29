import React from 'react'
import RouteMap from '../router/routeMap.js'
import {Container, Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Container>
                <RouteMap />
            </Container>
        )
    }
}

export default App