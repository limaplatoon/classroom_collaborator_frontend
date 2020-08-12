
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import API from '../API/ProfileAPI'
import Agenda from './Agenda';
import News from './News';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Container } from 'reactstrap';
import Title from '../static/img/mydash.png';
import { Image } from "react-bootstrap";




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
    console.log(responseJson)
    setProfile(responseJson)
    setFormData(responseJson)
    return responseJson
  }

  useEffect(() => {
    profileData()
  }, [])

  const backToPage = () => {
    setModal(!modal);
    window.location.href = '/'
    // profileData()
  }
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
    setModal(!modal);
    e.preventDefault();
    const decToken = jwtDecode(localStorage.getItem("token"));
    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("college", formData.college);
    data.append("username", decToken.user_id);
    data.append("profile_picture", formData.profile_picture);


    // console.log(data.get('profile_picture'))

    const response = await API.createProfile(data)
    //const responseJson = await response.json()
    setProfile({ ...formData })

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
  // console.log(profile.last_name)

  return (
    <div class="container myProfile" style={{
      // backgroundColor: '#f4f6fc',
      minHeight: '100vh',

      // backgroundRepeat: 'no-repeat',
      // backgroundImage: `url(${Title})`
    }}>

      <div style={styles.titleStyle}>
        <Image className="titleimage" src={Title} style={styles.imageStyle}></Image>
      </div>
      <div className="row" sm={{ size: 6, order: 2, offset: 1 }}>

        {Object.keys(profile).length > 0 ?
          <div className="col-4">

            <div>
              <h4 color="secondary" >My Profile</h4>
              <Card className="studentCard" xs={3} md={3} style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ width: '100%' }} src={`http://127.0.0.1:8000${profile.profile_picture}`} />
                <Card.Body>
                  <Card.Title>Student</Card.Title>

                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem> First Name: {profile.first_name}</ListGroupItem>

                  <ListGroupItem>Last Name: {profile.last_name} </ListGroupItem>
                  <ListGroupItem>College: {profile.college}</ListGroupItem>
                </ListGroup>
                <Button color="success" onClick={toggle}>Edit</Button>
              </Card>
            </div>

            <Modal style={{ width: '30rem' }} isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle} close={closeBtn}>Edit Profile</ModalHeader>
              <ModalBody>
                <form onSubmit={updateProfile}>
                  <label>First Name</label>
                  <p> <input
                    placeholder="First Name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={(e) => handleChange(e)} /></p>
                  <label>Last Name</label>
                  <p><input
                    placeholder="Last Name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={(e) => handleChange(e)} /> </p>
                  <label>College</label><br />
                  <input
                    placeholder="College"
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={(e) => handleChange(e)}
                  /><br /><br />

                  <p><label for="profile_picture">Choose Image to Upload</label></p>
                  <input type="file" name="profile_picture" id="profile_picture" onChange={handleFileChange} />
                  <Button onClick={backToPage} color=" secondary" type="submit" >Submit</Button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="info" onClick={backToPage} >cancel</Button>
              </ModalFooter>
            </Modal>

          </div>

          :
          <div className="col">
            <form onSubmit={createProfile}>
              <label>First Name</label>
              <p><input
                placeholder="First Name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={(e) => handleChange(e)}

              />
              </p>
              <p> <label>Last Name</label><br />
                <input
                  placeholder="Last Name"
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={(e) => handleChange(e)}
                />
              </p>

              <p><label>College</label><br />
                <input
                  placeholder="College"
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={(e) => handleChange(e)}
                />
              </p>

              <label for="profile_picture">Choose Image to Upload</label><br />
              <input type="file" name="profile_picture" id="profile_picture" onChange={handleFileChange} /><br /><br />
              <Button color="success" type="submit">Upload & submit </Button>
            </form>

          </div>}

        <div className='col' style={styles.colStyle}>
          <div className="row" style={styles.colStyle}>
            <div className="col" style={styles.colStyle}>
              <h4 color="secondary" >News</h4>

              <News />
            </div>
            <div className="col">
              <h4 color="secondary" >Agenda</h4>
              <Agenda />
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

const styles = {
  titleStyle: {
    textAlign: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    width: '275px',
    // minHeight: '50%',
  },

  colStyle: {
    padding: '0px',
    gap: '0px',
  },

  headingStyles: {
    textAlign: 'center',
    fontSize: '1.5em',
    color: "#3f21ba",
    fontWeight: 'bold'
  },

  mainHeading: {
    padding: '1em 0em 1.5em 0em',
    textAlign: 'center',
    fontSize: '2em',
    color: "#3f21ba",
    fontWeight: 'bold'
  },

  boxStyles: {
    backgroundColor: "#27273f",
    // padding: '.3em',
    borderRadius: '5px',
    color: '#eee',
    minHeight: '200px',
    boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.3)'
  },

  cardStyles: {
    marginTop: '1em',
    boxShadow: '3px 2px 20px rgba(0, 0, 0, 0.1)'
  },

  cardImage: {
    width: '120px',
    height: '140px',
    borderRadius: '100%',
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateY(-20%)'
  },


};

export default HomePage

