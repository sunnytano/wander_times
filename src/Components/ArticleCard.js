import React from 'react'

class ArticleCard extends React.Component{
    render(){
        console.log("am i here", this.props.filteredArticles)
        const { title, author, overview } = this.props
        return(
            <div>
                <h1>{title}</h1>
                <h3>{author}</h3>
                <p>{overview}</p>
            </div>
        )
    }
}

export default ArticleCard

