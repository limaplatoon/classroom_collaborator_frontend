import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'


class MySectionList extends Component {

	renderClasses = () => {
		if(this.props.CurrentClasses){
		  const classes= this.props.CurrentClasses.map(Class => {
			return(

<div className="jumbo" key={Class.ID} >
<Jumbotron>
<Container>
<p>
	 <br></br>
	 <Link to={ `/section/${Class.ID}` } style={{fontSize: '2rem'}}>{Class.Section} - {Class.Name}</Link>
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

		
export default MySectionList