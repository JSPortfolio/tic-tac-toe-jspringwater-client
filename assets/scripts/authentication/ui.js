'use strict'

const store = require('../store.js')

// SIGNUP SUCCESS/FAILURE: user interface functions related to signing up
const signUpSuccess = function (data) {
  console.log(data.user)

  $('#sign-up :text').val('')
  $('#sign-up :password').val('')


  $('#message').html('<h1>NEW USER SIGNED UP!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signUpFail = function (error) {

  $('#sign-up :text').val('')
  $('#sign-up :password').val('')

  $('#message').html('<h1>ERROR! FAILURE TO SIGN UP</h1>')
  $('#message').removeClass()
  $('#message').addClass('failure')

  console.log('Failed to sign up: ', error)
}

// SIGNIN SUCCESS/FAILURE: user interace functions related to signing in
const signInSuccess = function (data) {

  store.user = data.user

  $('#sign-in :text').val('')
  $('#sign-in :password').val('')

  $('#sign-in-up-view').hide()
  $('#logged-in-menu').show()

  console.log('User signed in: ', data)

  $('#message').html('<h1>SIGN-IN SUCCESSFUL!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signInFail = function (error) {

  $('#sign-in :text').val('')
  $('#sign-in :password').val('')

  $('#message').html('<h1>ERROR! FAILURE TO SIGN IN!</h1>')
  $('#message').removeClass()
  $('#message').addClass('success')

  console.log('Failed to sign in: ', error)
}

// CHANGEPASSWORD SUCCESS/FAILURE: user interface functions related to changing password
const changePasswordSuccess = function () {

  $('#change-password :password').val('')
  $('#changePassword :password').val('')

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

  $('#stats-view').hide()
  $('#change-password-view').hide()
  $('#game-view').hide()
  $('#logged-in-menu').hide()
  $('#sign-in-up-view').show()

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
