import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './Notifications.css'
import moment from 'moment'

const formatDatetime = (datetime) => {
  let date = new Date(datetime)
  return moment(date).format('M/D LT')
}

const Notifications = ({alerts, handleItemClick}) => {
  return (
    <div>
    <ListGroup>
      {alerts.map((alert, i) => {
        return <ListGroup.Item
                  className='alertItem'
                  key={i}
                  onClick={() => handleItemClick(alert.id)}
                >
                  {alert.event_title} at {formatDatetime(alert.event_time)}
                </ListGroup.Item>
      })}
    </ListGroup>
    </div>
  )
}

export default Notifications
