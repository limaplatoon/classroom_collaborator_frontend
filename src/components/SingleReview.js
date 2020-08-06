import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const SingleReview = () => {





  return (
    <div>
	<div className="jumbo" key={Rev.id} >
<Jumbotron>
<p>
	Here we will display each Review's Information
	maybe something like <br></br>
	{Rev.id} <br></br>
	{Rev.class_section}  <br></br>
	{Rev.User} <br></br>
	{Rev.Description} <br></br>
	{Rev.Professor} <br></br>

</p>
</Jumbotron>
    </div>
  )
}

export default SingleReview