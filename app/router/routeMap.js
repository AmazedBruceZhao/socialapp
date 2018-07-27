import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Posts from '../containers/posts/posts.js'
import Users from '../containers/users/users.js'
import Detail from '../containers/detail/detail.js'
import NotFound from '../components/notFound.js'




class RouteMap extends React.Component {
    render() {
        return (
             <BrowserRouter>
                 <Switch>
                     <Route exact path='/' component={Posts}/>
                     <Route exact path='/users' component={Users}/>
                     <Route path='/users/:id' component={Detail}/>
                     <Route path="*" component={NotFound}/>
                 </Switch>
            </BrowserRouter>
        )
    }
}

export default RouteMap