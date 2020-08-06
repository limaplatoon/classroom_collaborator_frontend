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
        <option>Large select</option>
        </Form.Control>
		<br></br>
        <Form.Control size="lg" type="text" placeholder="Description" />
		</Form.Group>
  <Button></Button>
		</form>

)

}








export default ReviewForm





