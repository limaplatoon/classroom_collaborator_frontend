import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


class MySectionList extends Component {

	renderClasses = () => {
		if(this.props.CurrentClasses){
		  const classes= this.props.CurrentClasses.map(Class => {
			return(


<div key={Class.ID} >
<Jumbotron >

<Container>
<div>
	 <br></br>
	 <div>Class Name: <Link to={ `/section/${Class.ID}` } >{Class.Name}</Link></div>
	 <br></br>
	 <div>SectionID: {Class.Section}</div>
	 <br></br>
	<div>Professor: <Link to={ `/Reviews/Professor/${Class.ProfID}` }>{Class.Professor}</Link></div>
 <br></br>
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

		
export default MySectionList