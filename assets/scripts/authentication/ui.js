'use strict'

const store = require('../store.js')

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

module.exports = {
  signUpSuccess,

  signUpFail
}
