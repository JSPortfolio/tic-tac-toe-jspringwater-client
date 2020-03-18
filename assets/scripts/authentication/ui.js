'use strict'

const store = require('../store.js')

const eventsGame = require('../game/events.js')

// user interface functions related to signing up
const signUpSuccess = function (data) {

  console.log('User signed up: ', data)

  console.log('new user has been store: ', data.user)
}

const signUpFail = function (error) {
  $('#message').text('An error occurred and you failed to sign up!')
  $('#message').removeClass()
  $('#message').addClass('fail')

  console.log('Failed to sign up: ', error)


}

// user interace functions related to signing in
const signInSuccess = function (data) {

  store.user = data.user

  console.log('User signed in: ', data)

  $('#game-page').removeClass()
  $('#game-page').addClass('visible')
  $('#sign-in-page').removeClass()
  $('#sign-in-page').addClass('invisible')
}

const signInFail = function (error) {
  $('#message').text('An error occurred; login credentials incorrect!')
  $('#message').removeClass()
  $('#message').addClass('fail')

  console.log('Failed to sign in: ', error)
}

//  user interface functions related to changing password
const changePasswordSuccess = function () {

  console.log('User password was change!')
}

const changePasswordFail = function (error) {

  console.log('error to change password: ', error)
}

// user interface functions related to signing out
const signOutSuccess = function () {

  store.user = ''

  console.log('User is signed out.', store)

  $('#game-page').removeClass()
  $('#game-page').addClass('invisible')
  $('#sign-in-page').removeClass()
  $('#sign-in-page').addClass('visible')

  for (let i = 0; i < store.game.cells.length; i++)
  {
    $(`#${i}`).html('')
  }

  store.game = ' '
}

const signOutFail = function (error) {

  console.log('User failed to sign out', error)
}

module.exports = {
  signUpSuccess,

  signUpFail,

  signInSuccess,

  signInFail,

  changePasswordSuccess,

  changePasswordFail,

  signOutSuccess,

  signOutFail
}
