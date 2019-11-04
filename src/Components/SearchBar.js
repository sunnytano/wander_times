import React from 'react'

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
                    <input 
                           onChange={this.handleChange}
                           placeholder="search articles"
                           name="newInput"
                           value={this.state.newInput} /> 
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SearchBar