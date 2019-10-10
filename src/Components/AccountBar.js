import React from 'react'

class AccountBar extends React.Component{
    render(){
        return(
            <div>
                <div className="account-bar">
                    <button>Login</button>
                    <button>Signup</button>
                    <button>Profile</button>
                </div>
            </div>
        )
    }
}

export default AccountBar