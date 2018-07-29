import React from 'react'
import {Menu, Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <Menu inverted >
                    <Menu.Item name='home'  >
                        <Link to={'/'}><Icon name='users'/></Link>
                    </Menu.Item>
            </Menu>
        )
    }
}
export default Header