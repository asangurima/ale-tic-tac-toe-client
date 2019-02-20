// event successes and failures go here
'use strict'
const store = require('../store.js')

const createGameSuccess = (responseData) => {
  console.log('Successfully created game!')
  console.log(responseData.game)
  store.game = responseData.game
  // setTimeout(() => {
  //   $('.??').html('')
  // }, 3000)
}

const createGameFailure = () => {
  console.log('Create game went wrong. Please try again.')
}

const updateGameSuccess = () => {
  console.log('Successfully updated game!')
}

const updateGameFailure = () => {
  console.log('Update went wrong. Please try again.')
}

const getGamesSuccess = (responseData) => {
  console.log('Successfully got games!')
  console.log(responseData)
  store.games = responseData.games
  $('.auth-messages-2').html(`Total games played: ${store.games.length}`)
  setTimeout(() => {
    $('.auth-messages-2').html('')
  }, 5000)
}

const getGamesFailure = () => {
  $('.auth-messages-2').html('Get games went wrong. Please try again.')
  setTimeout(() => {
    $('.auth-messages-2').html('')
  }, 3000)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
