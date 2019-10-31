import React from 'react'

class ArticleCard extends React.Component{
    render(){
        const { title, author, overview } = this.props.article
        return(
            <div>
                <h4>{title}is this working</h4>
                <h5>{author}</h5>
                <p>{overview}</p>
            </div>
        )
    }
}

export default ArticleCard

