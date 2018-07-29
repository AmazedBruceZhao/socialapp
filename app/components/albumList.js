import React, {Component} from 'react'
import Photos from "../containers/user/content/photos";
import { Icon, Label } from 'semantic-ui-react'

class AlbumList extends Component {
    render(){
        const albums = this.props.data.map((album) =>
            <div key={album.id}>
                <Label key={album.id}>
                    <Icon name='picture' /> {album.title}
                </Label>
                <Photos albumId={album.id}/>
            </div>
        );

        return (
            <div>
                {albums}
            </div>
        );
    }
}

export default AlbumList