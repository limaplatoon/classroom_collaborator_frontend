import React, {createContext, useState} from 'react'
import NotificationsAPI from "../API/NotificationsAPI"

export const NavBarContext = createContext()

const NavBarContextProvider = (props) => {
  const [alerts, setAlerts] = useState([])

  const notificationTimer = (alert) => {
    const now = new Date()
    const timeDelta = (new Date(alert.event_time) - now) / (1000 * 60)
    setTimeout(
      () => setAlerts((state) => [...state, alert]),
      (timeDelta - 60) * 1000
    )
  }

  const loadNotifications = async () => {
    setAlerts([])
    const response = await NotificationsAPI.getNotifications()
    const responseJson = await response.json()
    responseJson.map((alert) => notificationTimer(alert))
  }

  const clearNotification = async (alertID) => {
    await NotificationsAPI.updateNotifications(alertID)
    setAlerts([...alerts].filter((alert) => alert.id !== alertID));
  }


  return (
    <NavBarContext.Provider value={{alerts, loadNotifications, clearNotification}}>
      {props.children}
    </NavBarContext.Provider>
  )
}

export default NavBarContextProvider
