import React from 'react'
import { Fragment } from 'react';
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component{

    state = {
        newInput: "",
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.changeFilter(this.state.newInput)
        this.setState({
            newInput: ""
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <Fragment className="ui icon input">
                    <Input id="search-bar"
                           onChange={this.handleChange}
                           placeholder="search articles"
                           name="newInput"
                           value={this.state.newInput} /> 
                     <i aria-hidden="true" className="search circular link icon"></i>
                    </Fragment>
                </form>
            </div>
        )
    }
}

export default SearchBar