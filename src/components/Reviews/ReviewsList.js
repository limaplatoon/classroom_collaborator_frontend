import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


class ReviewList extends Component {




	renderReviews = () => {
		if(this.props.Reviews){
		  const review= this.props.Reviews.map(Rev => {
			return(

<div className="jumbo" key={Rev.id}>

<Jumbotron >
<Container>
<p>
	<a href="Link to reviews by professor">{Rev.Professor}</a> <br></br>

	{Rev.section}  <br></br>
	{Rev.student} <br></br>
	{Rev.description} <br></br>


</p>
</Container>
</Jumbotron>
<br></br>

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