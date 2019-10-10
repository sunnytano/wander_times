import React from 'react'
import ArticleCard from '../Components/ArticleCard'

class ArticleContainer extends React.Component{

    state ={
        loading: true
    }

    render(){
        console.log(this.props.articles)
        return(
            <div>
                <div>
                {
                    this.state.loading ? 
                    null
                    :
                    this.props.articles.map(article =>{
                        return <ArticleCard
                                key={article.id}
                                article={article} />
                    })
                }
                <ArticleCard />
                </div>
            </div>
        )
    }
}

export default ArticleContainer