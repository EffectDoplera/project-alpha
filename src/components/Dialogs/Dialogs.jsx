import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const Diaolog = ({ name, id }) => {
  return (
    <div className={classes.dialog}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  )
}

const Message = ({ message }) => (
  <div className={classes.message}>{message}</div>
)

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <Diaolog name='Misha' id='1' />
        <Diaolog name='Vova' id='2' />
        <Diaolog name='Sasha' id='3' />
        <Diaolog name='Andrey' id='4' />
      </div>
      <div className={classes.messages}>
        <Message message='Hi' />
        <Message message='Lorem ipsum dolor sit amet.' />
        <Message message='Lorem, ipsum.' />
      </div>
    </div>
  )
}

export default Dialogs
