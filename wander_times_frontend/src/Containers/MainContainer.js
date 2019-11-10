import React from 'react'
import ArticleContainer from './ArticleContainer'

class MainContainer extends React.Component{
    render(){
 
        // console.log(this.props.articles)
        return(
            <div>
         <ArticleContainer 
            articles={this.props.articles.filter(article=>{
                return article.title.toLowerCase().includes(this.props.filter.toLowerCase())
            })}      
        />
            </div>
        )
    }
}

export default MainContainer