import { generate } from 'shortid';
import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from '../actions/dialogs';

const initialState = {
  dialogs: [
    { id: generate(), name: 'Misha' },
    { id: generate(), name: 'Vova' },
    { id: generate(), name: 'Sasha' },
    { id: generate(), name: 'Andrey' },
    { id: generate(), name: 'Masha' },
  ],
  messages: [
    { id: generate(), text: 'Hi' },
    { id: generate(), text: 'Lorem ipsum dolor sit amet.' },
    { id: generate(), text: 'Lorem, ipsum.' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessagesBody: action.payload };
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default dialogsReducer;
