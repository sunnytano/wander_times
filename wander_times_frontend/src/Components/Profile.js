import React, { Fragment } from 'react'
import { Grid, Segment, Image, Loader } from 'semantic-ui-react'
import LikeCard from './LikeCard'

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
    console.log(this.state.user)
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
                <Segment>
                            <h3>Favorite Articles</h3>
                                <div className="liked-card-container">{this.state.user.likes.map(liked=>{
                                    return  <LikeCard 
                                    user={this.state.user}
                                    article={liked.article}
                                    />
                                })}
                                </div>
                        </Segment>
                </Fragment>
			)
		} else {
			return <Loader />
		}
    }
}

export default Profile