import React, { useContext } from 'react'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import { StateContext } from './../../redux/StateContext'

import classes from './Dialogs.module.css'

const Dialogs = () => {
  const { dialogs, messages } = useContext(StateContext)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogs.map((dialog) => (
          <Dialog key={dialog.id} {...dialog} />
        ))}
      </div>
      <div className={classes.messages}>
        {messages.map((message) => (
          <Message key={messages.id} {...message} />
        ))}
      </div>
    </div>
  )
}

export default Dialogs
