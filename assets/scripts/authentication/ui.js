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

module.exports = {
  signUpSuccess,

  signUpFail,

  signInSuccess,

  signInFail,

  changePasswordSuccess,

  changePasswordFail
}
