import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticleContainer extends React.Component{
 
    render(){
        let articles = this.props.articles.map(article=>{
           return <ArticleCard
                key={article.id}
                likes={this.props.likes}
                article={article}
                addLikes={this.props.addLikes}
                deleteLikes={this.props.deleteLikes}
                currentUser={this.props.currentUser}
                selectedArticle={this.props.selectedArticle}
            />
        })
        return(
            <div className="article-card-container">
                {articles}
            </div>
        )
    }
}

export default ArticleContainer