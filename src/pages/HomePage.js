import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import API from '../API/ProfileAPI'



const HomePage = () => {

  const [profile, setProfile] = useState([])
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    profile_picture: "",
    college: ""
  });
  const profileData = async () => {
    const response = await API.getProfile()
    const responseJson = await response.json()
    setProfile(responseJson)
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
  console.log(profile)

  return Object.keys(profile).length > 0 ? (

    <div>

      <img style={{ width: '20%' }} src={`http://127.0.0.1:8000${profile.profile_picture}`} /><br />
      First Name: {profile.first_name} <br />
      Last Name: {profile.last_name} <br />
      College: {profile.college} <br />

    </div>
  ) : (<div>
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
        value={formData.college}
        onChange={(e) => handleChange(e)}
      />


      <label for="profile_picture">Choose Image to Upload</label>
      <input type="file" name="profile_picture" id="profile_picture" onChange={handleFileChange} />
      <button type="submit">Upload Image</button>
    </form>

  </div>)
}


export default HomePage

