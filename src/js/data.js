/* eslint-disable import/prefer-default-export */
export const data = {
  projects: [
    {
      id: 1,
      name: 'REST Backend',
      tasks: [
        { id: 11, name: 'Server', done: true },
        { id: 12, name: 'Headers', done: false },
        { id: 13, name: 'Get request', done: true },
        { id: 14, name: 'Post request', done: false },
      ],
    },
    {
      id: 2,
      name: 'Frontend',
      tasks: [
        { id: 21, name: 'Mobile adaptation', done: true },
        { id: 22, name: 'Tablet adaptation', done: false },
        { id: 23, name: 'Desktop adaptation', done: true },
        { id: 24, name: 'Fuctionality', done: false },
      ],
    },
    {
      id: 3,
      name: 'Android App',
      tasks: [
        { id: 31, name: 'Push Notifications And.', done: false },
        { id: 32, name: 'Google Pay Support', done: true },
        { id: 33, name: 'I18n And.', done: false },
        { id: 34, name: 'Google Play Publication', done: false },
      ],
    },
    {
      id: 4,
      name: 'iOS App',
      tasks: [
        { id: 41, name: 'Push Notifications', done: true },
        { id: 42, name: 'Apple Pay Support', done: false },
        { id: 43, name: 'I18n', done: false },
        { id: 44, name: 'AppStore Publication', done: false },
      ],
    },
  ],
};
