import React from 'react'
import { Card, Image, Button, Form} from 'semantic-ui-react'

class LikeCard extends React.Component{

    render(){
        const { title, author, overview, image, url } = this.props.article
        return(
            <Card onClick={this.handleClick}>
         
                <Card.Content>
                    <Card.Header href={url}>{title}</Card.Header>
                    <Card.Meta>
                    <span className='author'>{author}</span>
                    </Card.Meta>
                    <Card.Description>
                        {overview}
                    </Card.Description>
            </Card.Content>
        </Card>
            
        )
    }
}

export default LikeCard