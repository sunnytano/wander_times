import React from 'react'

class SearchBar extends React.Component{

    state = {
        newInput: ""
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
        console.log("new input here ", this.state.newInput)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
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