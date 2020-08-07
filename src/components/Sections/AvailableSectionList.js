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
	<a href="http://localhost:3000/" >{Class.Section}</a> 
	
<br></br>
	<a href="Reviews by professor" >{Class.Professor}</a> <br></br>
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