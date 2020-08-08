'use strict'

const authEvents = require('./auth/events')
const sniptsEvents = require('./snipts/events')


$(() => {
  //$('.user-dashboard').hide()
  // your JS code goes here
  // create a new account, so that the user will be able to access the website.
  $('#create-account').on('submit', authEvents.onSignUp)
  // create the sign in option, so users can log into the website and access the views.
  $('#sign-in').on('submit', authEvents.onSignIn)
  // create the change password, the user have to be authenticated to be able to see this view to change his own password.
  $('#displayChangePassword').on('click', authEvents.displayChangePassword)
  //displayChangePassword
  $('#change-password').on('submit', authEvents.onChangePassword)
  // create the sign out event, so the users will be able logged off from the website and the session will be destroyed.
  $('#sign-out').on('click', authEvents.onSignOut)

  // js related to the snippets of the website

  //hide events
  $('#navbar-site').hide()
  $('.user-dashboard').hide()

  // create an snippet for an user
  $('#snippets').on('submit', sniptsEvents.createSnippet)
  // view all snippets of an user
  $('#snippets-cards').on('submit', sniptsEvents.onViewSnippets)
  // delete one snippet
  $("#snippets-cards").on("click", ".btn-delete-snip", sniptsEvents.onDeleteSnippet)
  // select an snippet to be deleted
  $("#snippets-cards").on("click", ".btn-select-snip", sniptsEvents.onSelectSnippet)
  // update the snippet
  $('.btn-update-snip').on('click', sniptsEvents.onUpdateSnippet)


})
