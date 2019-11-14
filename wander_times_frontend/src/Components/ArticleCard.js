import React, { Fragment } from 'react'
import { Card, Button, Image, Form } from 'semantic-ui-react'

class ArticleCard extends React.Component {
    
    handleSubmit = (event, user_id, article_id) => {
        if(!this.props.likes.find(liked=>liked.article_id === article_id)){
        event.preventDefault()
        let url="http://localhost:3010/api/v1/likes"
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                user_id: user_id,
                article_id: article_id
            })
        })
        .then(res=>res.json())
        .then(response=>
            this.props.addLikes(response))
    }
    }

    handleDelete = articleId => {
        let url= `http://localhost:3010/api/v1/likes/${articleId}`
        fetch(url,{
          method: "DELETE",
          headers: { 
            "Content-Type": "application/json"
          }
        })
        .then(()=>{
            this.props.deleteLikes(articleId)
        })
    }

    handleClick = () => {
        this.props.selectedArticle(this.props.article)
    }

    render(){
        console.log(this.props.likes)
        // console.log(this.props.article)
        // console.log("currentUser", this.props.currentUser.id, "articleID", this.props.article.id)
        const { title, author, overview, image, url } = this.props.article
        return(
            <Card onClick={this.handleClick}>
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
         
            { 
                !this.props.currentUser
                ?
                null
                :
                <Fragment>
                {this.props.addLikes 
                ?
                 <Button onClick={(event)=>this.handleSubmit(event, this.props.currentUser.id, this.props.article.id)} className="ui button">Add Favorite</Button>
                :
                 <Button onClick={()=>{this.handleDelete(this.props.likes.id)}} className="ui button">Remove Favorite</Button>
                }
                 </Fragment>
        
        }
        </Card>
        )
    }
}

export default ArticleCard

