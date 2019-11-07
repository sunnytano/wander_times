import React from 'react'
import SearchBar from '../Components/SearchBar'
import AccountBar from '../Components/AccountBar'

class NavContainer extends React.Component{
    render(){
        return(
            <div>
                <AccountBar currentUser={this.props.currentUser}
                            logout={this.props.logout}
                />
                <SearchBar handleSearch={this.props.handleSearch}/>
            </div>
        )
    }
}

export default NavContainer