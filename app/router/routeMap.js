import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Posts from '../containers/posts/posts.js'
import User from '../containers/user/user.js'
import NotFound from '../components/notFound.js'

import {Container} from 'semantic-ui-react'
import Header from "../components/header";

class RouteMap extends React.Component {
    render() {
        return (
             <BrowserRouter>
                 <Container>
                     <Header/>
                    <Container>
                    <Switch>
                        <Route exact path='/' component={Posts}/>
                        <Route path='/users/:id' component={User}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                    </Container>
                 </Container>
            </BrowserRouter>
        )
    }
}

export default RouteMap