import { generate } from 'shortid'

const state = {
  posts: [
    { id: generate(), message: 'Hi', likeCounts: 12 },
    { id: generate(), message: 'Lorem ipsum dolor sit amet.', likeCounts: 11 },
    { id: generate(), message: 'Lorem, ipsum.', likeCounts: 5 },
  ],
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
}

export default state
