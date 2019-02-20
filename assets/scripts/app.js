'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const gameLogic = require('./game-logic.js')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game-api/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // $('.cell').on('click', gameLogic.onMakeMove)
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
