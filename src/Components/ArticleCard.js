import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class ArticleCard extends React.Component{
    render(){
        const { title, author, overview, image } = this.props.article
        return(
            <Card>
            <Image src={image} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='date'>{author}</span>
            </Card.Meta>
            <Card.Description>
                {overview}
            </Card.Description>
            </Card.Content>
        </Card>
            
        )
    }
}

export default ArticleCard

