import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Posts from './posts/posts.js'
import Users from './users/users.js'
import Detail from './detail/detail.js'
import NotFound from '../components/notFound.js'

class App extends React.Component {
    render() {
        return (
        	<div>
            	<Switch>
            	    <Route exact path='/' component={Posts}/>
            	    <Route exact path='/users' component={Users}/>
            	    <Route path='/users/:id' component={Detail}/>
            	    <Route path="*" component={NotFound}/>
            	</Switch>
            </div>
        )
    }
}

export default App