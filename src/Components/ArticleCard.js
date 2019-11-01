import React from 'react'

class ArticleCard extends React.Component{
    render(){
        const { title, author, overview } = this.props.article
        return(
            <div>
                <h4>{title}</h4>
                <h5>By -{author}</h5>
                <p>{overview}</p>
                <button className="article-button">Like</button>
            </div>
        )
    }
}

export default ArticleCard

