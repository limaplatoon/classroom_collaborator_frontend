import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Redirect } from 'react-router';

class ReviewForm extends Component {
// constructor(props) {
//   super(props);

// }

   

renderOptions = () => {
		if (this.props.UserSections) {
		const options = this.props.UserSections.map((Option,index) => {
			return(
				<option className = "Options" 
				value = {Option.ID} key = {Option.ID} >
				{Option.Section}, {Option.Professor}
				</option>
			)
		})
		
		return(
		<Form.Control as="select" size="lg">
				  {options}
        </Form.Control>
		  )

	
}
}



render()
 {
	// if (this.state.redirect) {
	// 		return <Redirect push to="/" />;
	// 	  }
	return (
		<Form onSubmit= {this.props.HandleSubmitReview}>
		<Form.Group>
			<label>Select a Class</label>
			<React.Fragment>
			  {this.renderOptions()}
			</React.Fragment>
		<br></br>
		<label>Leave a detailed review of your experience in this class? Was it homework heavy? Are tests 80% of your Final Grade? Let it be known below.</label>
        <Form.Control size="lg" type="text" placeholder="Description" />
		</Form.Group>
  <Button type='Submit'>Submit</Button>
		</Form>

)

}
}

export default ReviewForm





