import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import API from '../API/ProfileAPI'
import Agenda from './Agenda';
import News from './News';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const HomePage = () => {

  const [profile, setProfile] = useState([])
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    profile_picture: "",
    college: ""
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  const profileData = async () => {
    const response = await API.getProfile()
    const responseJson = await response.json()
    setProfile(responseJson)
    setFormData(responseJson)
    return responseJson
  }

  useEffect(() => {
    profileData()
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleFileChange = (e) => {
    const { name } = e.target;
    const files = e.target.files[0];
    setFormData({ ...formData, [name]: files });
  }

  const createProfile = async (e) => {
    e.preventDefault();
    const decToken = jwtDecode(localStorage.getItem("token"));
    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.first_name);
    data.append("college", formData.college);
    data.append("username", decToken.user_id);
    data.append("profile_picture", formData.profile_picture);


    console.log(data.get('profile_picture'))

    const response = await API.createProfile(data)
    //const responseJson = await response.json()

  }

  const updateProfile = async (e) => {
    e.preventDefault();
    const decToken = jwtDecode(localStorage.getItem("token"));
    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("college", formData.college);
    data.append("username", decToken.user_id);
    data.append("profile_picture", formData.profile_picture);


    // console.log(data.get('profile_picture'))

    const response = await API.updateProfile(data)
    //const responseJson = await response.json()

  }

  return (

    <div style={{ width: "90%", margin: "0 auto" }}>
      <br></br>
      <div className="row new">
        {Object.keys(profile).length > 0 ?
          <div className="col-3">

            <div>
              <Card className="studentCard" xs={6} md={4} style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: '100%' }} src={`http://127.0.0.1:8000${profile.profile_picture}`} />
                <Card.Body>
                  <Card.Title>Student</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
            </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem> First Name: {profile.first_name}</ListGroupItem>
                  <ListGroupItem>Last Name: {profile.last_name} </ListGroupItem>
                  <ListGroupItem>College: {profile.college}</ListGroupItem>
                </ListGroup>
                <Button color="success" onClick={toggle}>Edit</Button>
              </Card>
            </div>

            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
              <ModalBody>
                <form onSubmit={updateProfile}>
                  <label>First Name</label>
                  <input
                    placeholder="First Name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={(e) => handleChange(e)} />
                  <label>Last Name</label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={(e) => handleChange(e)} />
                  <label>College</label>
                  <input
                    placeholder="College"
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="profile_picture">Choose Image to Upload</label>
                  <input type="file" name="profile_picture" id="profile_picture" onChange={handleFileChange} />
                  <Button color="secondary" type="submit" >Submit</Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>Back-To-Page</Button>
              </ModalFooter>
            </Modal>

          </div>

          :
          <div className="col">
            <form onSubmit={createProfile}>
              <label>First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={(e) => handleChange(e)}

              />
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={(e) => handleChange(e)}
              />

              <label>College</label>
              <input
                placeholder="College"
                type="text"
                name="college"
                value={formData.last_name}
                onChange={(e) => handleChange(e)}
              />

              <label for="profile_picture">Choose Image to Upload</label>
              <input type="file" name="profile_picture" id="profile_picture" onChange={handleFileChange} />
              <button type="submit">Upload Image</button>
            </form>

          </div>}

        <div className='col'>
          <div className="row">
            <div className="col">
              News
              <News />
            </div>
            <div className="col">
              Agenda
              <Agenda />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export default HomePage

