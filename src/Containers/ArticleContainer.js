import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticleContainer extends React.Component{

    render(){
        let articles = this.props.articles.map(article=>{
            return <ArticleCard
                key={article.id}
                article={article}
            />
        })
        return(
            <div>
                {articles}
            </div>
        )
    }
}

export default ArticleContainer