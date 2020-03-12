'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onSignUp = function (event) {

  event.preventDefault()

  api.signUp(getFormFields(event.target))

    .then(ui.signUpSuccess)

    .catch(ui.signUpFail)
}

module.exports = {
  onSignUp

}
