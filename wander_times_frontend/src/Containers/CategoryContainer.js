import React from 'react'
import CategoryCard from '../Components/CategoryCard'

class CategoryContainer extends React.Component{
    render(){
        return(
            <div id="category-container">
                <CategoryCard 
                        changeCategory={this.props.changeCategory}
                        categoryFilter={this.props.categoryFilter}
                />
            </div>
        )
    }
}

export default CategoryContainer