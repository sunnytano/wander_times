import React from 'react'

class ArticleCard extends React.Component{
    render(){
        console.log("am i here", this.props.filteredArticles)
        const { title, author, overview } = this.props.article
        return(
            <div>
                <h1>{title}is this working</h1>
                <h3>{author}</h3>
                <p>{overview}</p>
            </div>
        )
    }
}

export default ArticleCard

