import React, { Fragment } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class AccountBar extends React.Component{
    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                {this.props.currentUser
                ?
                    <Fragment>
                    <h3>This is the current user, {this.props.currentUser.name}</h3>
                    <Link onClick={this.props.logout}>Logout</Link>
                    </Fragment>
            :

                <div className="account-bar">
                    <Link to='/login'>Login</Link>
                    <Link>Profile</Link>
                </div>
                }
            </div>
        )
    }
}

export default AccountBar