import React from 'react'
import SearchBar from './SearchBar'
import AccountBar from './AccountBar'

class NavContainer extends React.Component{
    render(){
        return(
            <div>
                <AccountBar />
                <SearchBar />
            </div>
        )
    }
}

export default NavContainer