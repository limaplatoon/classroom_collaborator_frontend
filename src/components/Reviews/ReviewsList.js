import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './ReviewsList.css'


class ReviewList extends Component {




	renderReviews = () => {
		if(this.props.Reviews){
		  const review= this.props.Reviews.map(Rev => {
			return(

<div className="jumbo" key={Rev.ID}>
<Jumbotron fluid>
<Container>
<div>
	<div><Link to={ `/Reviews/Professor/${Rev.ProfID}` }>Professor: {Rev.Professor}</Link></div> <br></br>

	<div>Class Section: {Rev.section}</div>  <br></br>
	<div>Reviewer: {Rev.student}</div> <br></br>
	<div>Review: {Rev.description}</div> <br></br>
</div>
</Container>
</Jumbotron>
</div> 
			)
		  })
   return(

			<div className = "row">
			  {review}
			</div>
		  )
		}

	}







render(){
		return (
		  <React.Fragment>
			<div>
			  {this.renderReviews()}
			</div>
		  </React.Fragment>
		 )
	  }
}

		
export default ReviewList