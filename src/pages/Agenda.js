import React, { useState, useEffect } from 'react'
import API from '../API/EventsAPI'
import { ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';

const Agenda = (props) => {
  const [agenda, setAgenda] = useState([])

  const getAgenda = async () => {
    const response = await API.getEvents()
    const responseJson = await response.json()
    setAgenda(responseJson)
  }

  useEffect(() => {
    getAgenda()
  }, [])
  console.log(agenda)
  const agenda_list = agenda.map(a => (
    <ListGroupItem tag="a" href="/my-calender">
      <h5>{a.title} - {a.location}</h5>
      <p style={{ fontSize: '12px' }}>
        <i>Start:</i> {moment(a.start).format('MMMM Do YYYY, h:mm:ss a')}  {'  '} <i>End:</i> {moment(a.end).format('MMMM Do YYYY, h:mm:ss a')}
      </p>
    </ListGroupItem>))
  return (



    <ListGroup flush>
      {agenda_list}
    </ListGroup>



  );





}

export default Agenda;
