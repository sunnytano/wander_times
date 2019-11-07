import React, { Fragment } from 'react';
import { Input } from 'semantic-ui-react'

class SearchBar extends React.Component{

    state = {
        newInput: "",
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.newInput)
        this.setState({
            newInput: ""
        })
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        //    <Fragment className="ui icon input">
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <Fragment>
                    <Input id="search-bar"
                           onChange={this.handleChange}
                           placeholder="search articles"
                           name="newInput"
                           value={this.state.newInput} /> 
                     <i type="submit" aria-hidden="true" className="search circular link icon"></i>
                    </Fragment>
                </form>
            </div>
        )
    }
}

export default SearchBar