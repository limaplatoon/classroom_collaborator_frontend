import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class SectionForm extends Component {
// constructor(props) {
//   super(props);

// }

   



render()
 {
	// if (this.state.redirect) {
	// 		return <Redirect push to="/" />;
	// 	  }
	return (
		<Form onSubmit= {this.props.HandleSubmitNewSection}>
		<Form.Group>
			<label>Input your Professor's Last Name Below</label>
        <Form.Control size="lg" type="text" placeholder="Smith" />
		<br></br>
		<label>Input your Class Name Below</label>
        <Form.Control size="lg" type="text" placeholder="History 101" />
		</Form.Group>
  <Button type='Submit'>Submit</Button>
		</Form>

)

}
}

export default SectionForm
