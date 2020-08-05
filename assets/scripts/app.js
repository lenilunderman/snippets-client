'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.user-dashboard').hide()
  // your JS code goes here
  // create a new account, so that the user will be able to access the game.
  $('#create-account').on('submit', authEvents.onSignUp)
  // create the sign in option, so users can log into the website and access the game and see more views.
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create the change password, the user have to be authenticated to be able to see this view to change his own password.
  $('#displayChangePassword').on('click', authEvents.displayChangePassword)
  //displayChangePassword
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create the sign out event, so the users will be able logged off from the website and the session will be destroyed.
  $('#sign-out').on('click', authEvents.onSignOut)
})
