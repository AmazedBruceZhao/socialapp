import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Posts from '../containers/posts/posts.js'
import User from '../containers/user/user.js'
import NotFound from '../components/notFound.js'



class RouteMap extends React.Component {
    render() {
        return (
             <BrowserRouter>
                 <Switch>
                     <Route exact path='/' component={Posts}/>
                     <Route path='/users/:id' component={User}/>
                     <Route path="*" component={NotFound}/>
                 </Switch>
            </BrowserRouter>
        )
    }
}

export default RouteMap