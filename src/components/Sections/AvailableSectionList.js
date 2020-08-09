import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


class AvailableSectionList extends Component {


	renderClasses = () => {
		console.log(this.props.AvailableClasses)
		if(this.props.AvailableClasses){
		  const classes=this.props.AvailableClasses.map(Class => {
			return(

<div className="jumbo" key={Class.id} >
<Jumbotron>
<Container>
<p>
<button onClick= {() => this.props.enroll( Class.ID )}    >Join This Class!</button>
<br></br>
	<Link to="http://localhost:3000/" >{Class.Section}</Link> 
	
<br></br>
	<Link to={ `/Reviews/Professor/${Class.ProfID}` }>{Class.Professor}</Link> 
	<br></br>
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