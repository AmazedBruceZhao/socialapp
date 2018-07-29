import React, {Component} from 'react'
import Address from './address.js'
import { Label, Segment, List } from 'semantic-ui-react'

class Detail extends Component {
    render(){
        const details = Object.entries(this.props.data);
        if (details.length === 0){
            return (
                <Segment> </Segment>
            );
        }

        return (

            <Segment raised>
                <Label color='blue' ribbon>
                    Overview
                </Label>
                <List>
                    <List.Item>
                        <List.Icon name='user' />
                        <List.Content>{this.props.data.name}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{this.props.data.username}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>{this.props.data.email}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content>{this.props.data.phone}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='linkify' />
                        <List.Content>
                            <a href={'http://' + this.props.data.website}>{this.props.data.website}</a>
                        </List.Content>
                    </List.Item>
                </List>

                <Label color='blue' ribbon>
                    Company
                </Label>
                <List>
                    <List.Item>
                        <List.Icon name='warehouse' />
                        <List.Content>{this.props.data.company.name}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='warehouse' />
                        <List.Content>{this.props.data.company.catchPhrase}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='warehouse' />
                        <List.Content>{this.props.data.company.bs}</List.Content>
                    </List.Item>
                </List>

                <Label color='blue' ribbon>
                    Address
                </Label>
                <Address data={this.props.data.address}/>

            </Segment>
        );

    }
}

export default Detail