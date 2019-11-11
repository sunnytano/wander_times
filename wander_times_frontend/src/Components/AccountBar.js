import React, { Fragment } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AccountBar extends React.Component{
    render(){
        // console.log(this.props.currentUser)
        return(
            <div>
            <Grid.Row>
			    <Grid.Column width={16}>
                <Menu>
                <Link to="/">Home</Link>
                {this.props.currentUser
                ?
                <Menu.Menu position="right">
                    <h3>Welcome, {this.props.currentUser.username}</h3>
                    <Link to={`/users/${this.props.currentUser.id}`}>
                    <img 
                    style={{width: '40px', height: '40px'}}
                    src="https://cdn1.iconfinder.com/data/icons/messenger-and-society/16/user_person_avatar_unisex-512.png" alt={this.props.currentUser.username}/>
                    </Link>
                    <Menu.Item>
                    <Link onClick={this.props.logout}>Logout</Link>
                    </Menu.Item>
                    </Menu.Menu>
            :
            <Menu.Menu position="right">
                    <Link to='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                   </Menu.Menu>
                }
                </Menu>
                </Grid.Column>
                </Grid.Row>
            </div>
        )
    }
}

export default AccountBar