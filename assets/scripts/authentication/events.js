'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

//  function to call api and ui functions related
//  to signing up feature
const onSignUp = function (event) {

  event.preventDefault()

  console.log('SIGNING UP NEW USER...')

  api.signUp(getFormFields(event.target))

    .then(ui.signUpSuccess)

    .catch(ui.signUpFail)
}

// function to call api and ui function related
// to signing in feature
const onSignIn = function (event) {
  event.preventDefault()

  console.log('SIGNING IN USER...')

  api.signIn(getFormFields(event.target))

    .then(ui.signInSuccess)

    .catch(ui.signInFail)
}

// function to call api and ui functions related
// to changing user's password
const onChangePassword = function (event) {
  event.preventDefault()

  console.log('CHANGING USER PASSWORD...')

  api.changePassword(getFormFields(event.target))

    .then(ui.changePasswordSuccess)

    .catch(ui.changePasswordFail)
}

module.exports = {
  onSignUp,

  onSignIn,

  onChangePassword
}
