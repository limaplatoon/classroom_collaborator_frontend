import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

class AvailableSectionList extends Component {


	renderClasses = () => {
		console.log(this.props.AvailableClasses)
		if(this.props.AvailableClasses){
		  const classes=this.props.AvailableClasses.map(Class => {
			return(

<div  key={Class.id} >
<Jumbotron fluid>
<Container>
<div>
	<div>Class Name:<Link to={`/section/${Class.ID}` }>{Class.Name}</Link> </div>	
<br></br>
	<div>Instructor:<Link to={ `/Reviews/Professor/${Class.ProfID}` }>Professor {Class.Professor}</Link> </div>
<br></br>	
<div><Button onClick= {() => this.props.enroll( Class.ID )}    >Join This Class!</Button></div>

</div>
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