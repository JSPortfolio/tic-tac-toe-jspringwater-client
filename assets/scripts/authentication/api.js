'use strict'

const config = require('../config.js')

const store = require('../store.js')

//  function to call curl command to sign-up new user
const signUp = function (data) {

  return $.ajax({
    url: config.apiUrl + '/sign-up',

    method: 'POST',

    data: data
  })
}

//  function to call curl command to sign-in user
//  and save user data.
const signIn = function (data) {

  return $.ajax({
    url: config.apiUrl + '/sign-in',

    method: 'POST',

    data: data
  })
}

//  function to call curl command to change
//  user's password
const changePassword = function (data) {

  return $.ajax({
    url: config.apiUrl + '/change-password',

    method: 'PATCH',

    headers: {
      Authorization: 'Token token=' + store.user.token
    },

    data: data
  })
}

module.exports = {
  signUp,

  signIn,

  changePassword

}
