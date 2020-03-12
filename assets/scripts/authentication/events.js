'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onSignUp = function (event) {

  event.preventDefault()

  console.log('SIGNING UP NEW USER...')

  api.signUp(getFormFields(event.target))

    .then(ui.signUpSuccess)

    .catch(ui.signUpFail)
}

const onSignIn = function (event) {
  event.preventDefault()

  console.log('SIGNING IN USER...')

  api.signIn(getFormFields(event.target))

    .then(ui.signInSuccess)

    .catch(ui.signInFail)
}

module.exports = {
  onSignUp,

  onSignIn
}
