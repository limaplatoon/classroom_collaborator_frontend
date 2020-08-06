import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class ReviewForm extends Component {

renderOptions = () => {
		console.log(this.props.UserSections.length)
		const options = this.props.UserSections.map((Option,index) => {
			return(
				<option classname = "Options" value = "Hello World" key = {index} >
				{Option.Section}, {Option.Professor}
				</option>
			)
		})
		console.log({options})
		return(
		<Form.Control as="select" size="lg">
				  {options}
        </Form.Control>
		  )

	
}




render() {
	return (
		<form>
		<Form.Group>
			<label>Select Your Class Below</label>
			<React.Fragment>
			  {this.renderOptions()}
			</React.Fragment>
		<br></br>
        <Form.Control size="lg" type="text" placeholder="Description" />
		</Form.Group>
  <Button>Submit</Button>
		</form>

)

}
}

export default ReviewForm





