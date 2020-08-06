import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'


class SectionList extends Component {

	renderClasses = () => {
		if(this.props.CurrentClasses){
		  const classes= this.props.CurrentClasses.map(Class => {
			return(

<div className="jumbo" key={Class.id} >
<Jumbotron>
<p>
	Here we will display each Classes' Information
	maybe something like. And definitely hyperlink the class name <br></br>
	{Class.Section} <br></br>
	{Class.Professor}  <br></br>

</p>
</Jumbotron>
</div> 
			)
		  })
   return(

			<div className = "row">
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

		
export default SectionList