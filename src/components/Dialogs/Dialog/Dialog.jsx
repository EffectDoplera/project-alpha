import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Dialog.module.css'

const Dialog = ({ name, id }) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}

export default Dialog
