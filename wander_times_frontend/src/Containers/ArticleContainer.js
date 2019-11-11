import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticleContainer extends React.Component{
 
    render(){
        let articles = this.props.articles.map(article=>{
           return <ArticleCard
                key={article.id}
                article={article}
                addLikes={this.props.addLikes}
                currentUser={this.props.currentUser}
                selectedArticle={this.props.selectedArticle}
            />
        })
        return(
            <div id="article-card-container">
                {articles}
            </div>
        )
    }
}

export default ArticleContainer