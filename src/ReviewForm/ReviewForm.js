import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const ReviewForm = (props) => {

// buildOptions




return (
	<form onSubmit={e => this.props.handle_login(e, this.state)}>
		<Form.Group>
			<label>Select Your Class Below</label>
		<Form.Control as="select" size="lg">
        <option>A1234 Mr Professorson</option>
        <option>B3652 dr. philosopher</option>
        <option>K7532 ms. Smith</option>
        </Form.Control>
		<br></br>
        <Form.Control size="lg" type="text" placeholder="Description" />
		</Form.Group>
  <Button>Submit</Button>
		</form>

)

}








export default ReviewForm





