import React from 'react'
import { Grid, Segment, Image, Loader } from 'semantic-ui-react'

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
				<Grid columns={2} centered>
					<Grid.Column width={3}>
                    This is the Profile Page
						<Segment>
							<Image src={user.avatar} fluid />
							<strong>{user.username}</strong><br/>
						</Segment>
					</Grid.Column>
				</Grid>
			)
		} else {
			return <Loader />
		}
    }
}

export default Profile