import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


class AvailableSectionList extends Component {

	renderClasses = () => {
		if(this.props.AvailableClasses){
		  const classes= this.props.AvailableClasses.map(Class => {
			return(

<div className="jumbo" key={Class.id} >
<Jumbotron>
<Container>
<p>
Join This Class!
	 <br></br>
	{Class.Section} <br></br>
	{Class.Professor}  <br></br>
</p>
</Container> 
</Jumbotron>
</div> 

			)
		  })
   return(

			<div>
			  {classes}
			</div>
		  )
		}

	}







render(){
		return (
		  <React.Fragment>
			<div>
			  {this.renderClasses()}
			</div>
		  </React.Fragment>
		 )
	  }
}

		
export default AvailableSectionList