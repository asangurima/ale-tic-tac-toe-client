'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('.auth-messages-2').text('Successfully signed up!')
  setTimeout(() => {
    $('.auth-messages-2').html('')
  }, 3000)
}

const signUpFailure = () => {
  $('.auth-messages-2').text('Something went wrong. Perhaps try a different email.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.auth-messages-2').html('')
  }, 3000)
}

const signInSuccess = (responseData) => {
  $('.auth-messages').text(`Successfully signed in!`)
  setTimeout(() => {
    $('.auth-messages').text(` Hello, ${responseData.user.email}!`)
  }, 3000)
  // this should make the sign out button display on succesful sign-in
  $('#sign-out-form').removeClass('d-none')
  $('.game-board').removeClass('d-none')
  $('#resetGame').removeClass('d-none')
  $('#change-pw-button').removeClass('d-none')
  $('.userMessages').html('x starts the game!')
  // this should make the sign in form disappear on succesful sign-in
  $('#sign-in-form').addClass('d-none')
  $('#signUpButton').addClass('d-none')
  // save the token
  store.user = responseData.user
}

const signInFailure = () => {
  $('.auth-messages').text('Something went wrong, please try again!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.auth-messages').html('')
  }, 3000)
}

const changePasswordSuccess = () => {
  $('.password-messages').text('Successfully updated password.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.password-messages').html('')
  }, 3000)
}

const changePasswordFailure = () => {
  $('.password-messages').text('Something went wrong, please try again!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.password-messages').html('')
  }, 3000)
}

const signOutSuccess = () => {
  $('.auth-messages').text('Successfully signed out.')
  $('form').trigger('reset')
  $('.game-board').addClass('d-none')
  $('#resetGame').addClass('d-none')
  $('#change-pw-button').addClass('d-none')
  $('#sign-in-form').removeClass('d-none')
  $('#sign-out-form').addClass('d-none')
  $('.userMessages').html('Please sign-in to play.')
  $('#signUpButton').removeClass('d-none')
  store.user = null
  setTimeout(() => {
    $('.auth-messages').html('')
  }, 3000)
}

const signOutFailure = () => {
  $('.auth-messages').text('Something went wrong, please try again!')
  setTimeout(() => {
    $('.auth-messages').html('')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
