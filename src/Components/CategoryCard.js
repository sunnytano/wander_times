import React from 'react'
import { Grid } from 'semantic-ui-react'

class CategoryCard extends React.Component{
    render(){
        
        return(
            <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
              <div className='category-card-tech'>TECH</div>
              </Grid.Column>
              <Grid.Column>
              <div className='category-card-travel'>TRAVEL</div>
              </Grid.Column>
            </Grid.Row>
            </Grid>
        )
    }
}

export default CategoryCard