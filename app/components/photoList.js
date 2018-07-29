import React, {Component} from 'react'
import { Divider, Image } from 'semantic-ui-react'

class PhotoList extends Component {
    render(){
        const photos = this.props.data.map((photo) =>
            <Image key={photo.id} as='a' src={photo.thumbnailUrl} href={photo.url} alt={photo.title} />
        );

        return (
            <Image.Group size='small'>
                {photos}
            </Image.Group>
        );

    }
}

export default PhotoList