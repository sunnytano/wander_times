import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

class ArticleCard extends React.Component{
    render(){
        const { title, author, overview, image, url } = this.props.article
        return(
            <Card>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header href={url}>{title}</Card.Header>
                    <Card.Meta>
                    <span className='author'>{author}</span>
                    </Card.Meta>
                    <Card.Description>
                        {overview}
                    </Card.Description>
            </Card.Content>
            <Button class="ui button">Add Favorite</Button>
        </Card>
            
        )
    }
}

export default ArticleCard

