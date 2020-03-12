'use strict'

const store = require('../store.js')


// user interface functions related to signing up
const signUpSuccess = function (data) {
  $('#message').text('A New User has signed up!')
  $('#message').removeClass()
  $('#message').addClass('success')

  console.log('User signed up: ', data)
}

const signUpFail = function (error) {
  $('#message').text('An error occurred and you failed to sign up!')
  $('#message').removeClass()
  $('#message').addClass('fail')

  console.log('error to sign up: ', error)


}

// user interace functions related to signing in
const signInSuccess = function (data) {
  $('#message').text('The User has signed in!')
  $('#message').removeClass()
  $('#message').addClass('success')

  console.log('User signed in: ', data)

  store.user = data.user

  $('#game-page').removeClass()
  $('#game-page').addClass('visible')
  $('#sign-in-page').removeClass()
  $('#sign-in-page').addClass('invisible')
}

const signInFail = function (error) {
  $('#message').text('An error occurred; login credentials incorrect!')
  $('#message').removeClass()
  $('#message').addClass('fail')

  console.log('error to sign in: ', error)
}

//  user interface functions related to changing password
const changePasswordSuccess = function () {
  $('#message').text('User changed password!')
  $('#message').removeClass()
  $('#message').addClass('success')

  console.log('User password was change!')
}

const changePasswordFail = function (error) {
  $('#message').text('Password remains unmodified!')
  $('#message').removeClass()
  $('#message').addClass('fail')

  console.log('error to change password: ', error)
}

// user interface functions related to signing out
const signOutSuccess = function () {
  $('#message').text(`User is logged out!`)
  $('#message').removeClass()
  $('#message').addClass('success')

  store.user = ''

  console.log('User is signed out.', store)

  $('#game-page').removeClass()
  $('#game-page').addClass('invisible')
  $('#sign-in-page').removeClass()
  $('#sign-in-page').addClass('visible')
}

const signOutFail = function (error) {
  $('#message').text(`User is still logged in!`)
  $('#message').removeClass()
  $('#message').addClass('fail')

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
