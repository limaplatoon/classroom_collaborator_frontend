import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'


class ReviewList extends Component {

	renderReviews = () => {
		if(this.props.Reviews){
		  const review= this.props.Reviews.map(Rev => {
			return(

<div className="jumbo" key={Rev.id}>
<Jumbotron>
<div class="container">
<p>

	Here we will display each Review Information
	maybe something like <br></br>
	{Rev.id} <br></br>
	{Rev.class_section}  <br></br>
	{Rev.User} <br></br>
	{Rev.Description} <br></br>
	{Rev.Professor} <br></br>

</p>
</div>
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