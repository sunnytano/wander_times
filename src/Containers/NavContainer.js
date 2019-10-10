import React from 'react'
import SearchBar from '../Components/SearchBar'
import AccountBar from '../Components/AccountBar'

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