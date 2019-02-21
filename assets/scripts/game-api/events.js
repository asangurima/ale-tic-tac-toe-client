'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const gameLogic = require('../game-logic')
const store = require('../store.js')

const onCreateGame = (event) => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = (event) => {
  event.preventDefault()
  // const cellIndexValue = $(event.target).data('index')
  api.updateGame(store.cellIndexValue, store.currentPlayer, store.game.over)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGetGames = (event) => {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const addHandlers = () => {
  $('.cell').on('click', () => {
    // console.log(store)
    if (!store.game.over) {
      gameLogic.onMakeMove(event)
      onUpdateGame(event)
    }
  })

  $('#resetGame').on('click', () => {
    onCreateGame(event)
    gameLogic.onResetGame(event)
  })

  $('#number-of-games').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
