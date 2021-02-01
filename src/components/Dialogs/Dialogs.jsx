import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        <div className={classes.dialog}>Misha</div>
        <div className={classes.dialog}>Vova</div>
        <div className={classes.dialog}>Andrey</div>
        <div className={classes.dialog}>Sasha</div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>Lorem ipsum dolor sit amet.</div>
        <div className={classes.message}>Lorem, ipsum.</div>
      </div>
    </div>
  )
}

export default Dialogs
