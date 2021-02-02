import { generate } from 'shortid';

const initialState = {
  dialogs: [
    { id: generate(), name: 'Misha' },
    { id: generate(), name: 'Vova' },
    { id: generate(), name: 'Sasha' },
    { id: generate(), name: 'Andrey' },
    { id: generate(), name: 'Masha' },
  ],
  messages: [
    { id: generate(), message: 'Hi' },
    { id: generate(), message: 'Lorem ipsum dolor sit amet.' },
    { id: generate(), message: 'Lorem, ipsum.' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dialogsReducer;
