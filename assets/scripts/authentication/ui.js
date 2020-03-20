'use strict'

const store = require('../store.js')

const eventsGame = require('../game/events.js')

// SIGNUP SUCCESS/FAILURE: user interface functions related to signing up
const signUpSuccess = function (data) {
  console.log('User signed up: ', data)

  console.log('new user has been store: ', data.user)

  $('#message').html('<h1>NEW USER SIGNED UP!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signUpFail = function (error) {
  $('#message').html('<h1>ERROR! FAILURE TO SIGN UP</h1>')
  $('#message').removeClass()
  $('#message').addClass('failure')

  console.log('Failed to sign up: ', error)
}

// SIGNIN SUCCESS/FAILURE: user interace functions related to signing in
const signInSuccess = function (data) {

  store.user = data.user

  console.log('User signed in: ', data)

  $('#message').html('<h1>SIGNUP SUCCESSFUL!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')

  $('#sign-in-page').removeClass()
  $('#sign-in-page').addClass('invisible')
  $('#logged-in-menu-page').removeClass()
  $('#logged-in-menu-page').addClass('visible')
}

const signInFail = function (error) {
  $('#message').html('<h1>ERROR! FAILURE TO SIGN IN!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')

  console.log('Failed to sign in: ', error)
}

// CHANGEPASSWORD SUCCESS/FAILURE: user interface functions related to changing password
const changePasswordSuccess = function () {

  console.log('User password was change!')

  $('#message').html('<h1>USER PASSWORD CHANGED!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordFail = function (error) {
  $('#message').html('<h1>SIGNUP SUCCESSFUL!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')

  console.log('error to change password: ', error)
}

// SIGNOUT SUCCESS/FAILURE: user interface functions related to signing out
const signOutSuccess = function () {

  store.user = ''

  console.log('User is signed out.', store)

  $('#game-page').removeClass()
  $('#game-page').addClass('invisible')
  $('#logged-in-menu-page').removeClass()
  $('#logged-in-menu-page').addClass('visible')

  $('#message').html('<h1>SIGNOUT SUCCESSFUL!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')

  store.game = ' '
}

const signOutFail = function (error) {
  $('#message').html('<h1>ERROR! USER NOT SIGNED OUT!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')

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
