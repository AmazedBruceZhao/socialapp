import React from 'react'

class Detail extends React.Component {
    render() {
    	console.log(this.props)
        return (
            <p>Detail，user id: {this.props.match.params.id}</p>
        )
    }
}

export default Detail