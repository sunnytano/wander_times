import React from 'react'
import SearchBar from './SearchBar'
import AccountBar from './AccoutnBar'

class NavContainer extends React.Component{
    render(){
        return(
            <div>
                <button>Login</button>
                <button>Signup</button>
                <button>Profile</button>
            </div>
        )
    }
}

export default NavContainer