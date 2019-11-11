import React, { Fragment } from 'react'
import { Grid, Segment, Image, Loader } from 'semantic-ui-react'
import ArticleCard from './ArticleCard'

class Profile extends React.Component{
    state={
        user: null
    }

    componentDidMount(){
        const id=this.props.match.params.id
        let url=`http://localhost:3010/api/v1/users/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(response=>{
            this.setState({
                user: response 
            })
        })
    }

    render(){
    const { user } = this.state
		if(user){
			return (
                <Fragment>
				<Grid columns={2} positon="left">
					<Grid.Column width={3}>
                    This is the Profile Page
						<Segment>
							<Image src={user.avatar} fluid />
							<strong>{user.username}</strong><br/>
						</Segment>
					</Grid.Column>
				</Grid>
                            <h3>Favorite Articles</h3>   
                        <div className="article-card-container">
                                        {
                    this.props.likes.map(liked => {
                        const articleObj = this.props.articles.find(article => article.id === liked.article_id)
                        return  <ArticleCard deleteLikes={this.props.deleteLikes} article={articleObj} likedId={liked.id}/>
                    })
                    }
                    </div>
                </Fragment>
			)
		} else {
			return <Loader />
		}
    }
}

export default Profile