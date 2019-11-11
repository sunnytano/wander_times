import React from 'react'
import SearchBar from '../Components/SearchBar'
import AccountBar from '../Components/AccountBar'

class NavContainer extends React.Component{
    // <SearchBar handleSearch={this.props.handleSearch}/>

    render(){
        return(
            <div>
                <AccountBar currentUser={this.props.currentUser}
                            logout={this.props.logout}
                />
            </div>
        )
    }
}

export default NavContainer