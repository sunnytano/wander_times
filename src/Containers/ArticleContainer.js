import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticleContainer extends React.Component{

    render(){
        console.log(this.props.articles)
        const filteredArticles = this.props.articles.filter(article=>{
            return article.title.toLowerCase().includes(this.props.filter.toLowerCase())
        })
        return(
            <div>
                <ArticleCard articles={filteredArticles} />
                </div>

        )
    }
}

export default ArticleContainer