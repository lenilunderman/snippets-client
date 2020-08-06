'use strict'

// our movies data
const data = {
  movies: [
    {
      title: 'something one',
      director: 'one'
    },
    {
      title: 'something two',
      director: 'two'
    },
  ]
}
// our movies-page template
const moviesPageTemplate = require('../scripts/templates/snippets.handlebars')
// give our template the data
const moviesPageHtml = moviesPageTemplate({ movies: data.movies })
// inject our compiled HTML into our webpage
$('#test-hand').append(moviesPageHtml)


const authEvents = require('./auth/events')
const sniptsEvents = require('./snipts/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  //$('.user-dashboard').hide()
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

  // js related to the snippets of the website
  $('#snippets').on('submit', sniptsEvents.createSnippet)
})
