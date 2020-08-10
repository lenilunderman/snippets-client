'use strict'
const store = require('../store')
const { css } = require('jquery')

const SignUpSuccess = function () {
    $('.create-account-message').text('The account was created successfully.')
    $('#create-account :input').val('')
}

const SignUpFailure = function () {
    $('.create-account-message').text('Please create an account to access the website!').addClass('alert alert-info mt-4').fadeOut(6000)
}

const SignInSuccess = function (response) {
    // hide events
    $('#createAccount-loginSite').hide()

    // show events
    $('.second-page').show()
    $('.master-image').show()
    $('nav').show()

    // storage the user inside the store variable, in which you can access the token.
    store.user = response.user
}

const SignInFailure = function () {
    $('.sign-in-message-error').text('Your username or password is incorrect!').fadeOut(6000)
    $('.sign-in-message-error').addClass('alert alert-info').show()
}

const ChangePasswordSuccess = function () {
    $('#snippets').show()
    $('#snippets-cards').show()
    //hide events
    $('#snippets').show()

    $('.change-password-message').text('You successfully changed the password.').fadeOut(6000)
    $('#change-password :input').val('')
    $('.change-password-container').show()
}

const ChangePasswordFailure = function () {
    $('.change-password-message').text('Ops... there is an error, your old password does not match.')
}

const signOutSuccess = function () {
    $('.second-page').hide()
    $('nav').hide()
    $('.viewFullSnips').hide()
    $('.user-dashboard').hide()

    // show events
    $('#createAccount-loginSite').show()

    $('#sign-in :input').val('')
}

const signOutFailure = function () {
    $('.sign-out-message').text('You need to be logged in, to be able to sign out of the website.')
}

const getStatsSuccess = function (response) {
    if (response.games.length === 0) {
        $('#number-wins').text('You haven\'t played any games yet!')
    } else {
        $('#number-wins').html('<b>Total number of games played: ' + response.games.length + '</b>').fadeIn(2000)
    }
}

module.exports = {
    SignUpSuccess,
    SignUpFailure,
    SignInSuccess,
    SignInFailure,
    ChangePasswordSuccess,
    ChangePasswordFailure,
    signOutSuccess,
    signOutFailure,
    getStatsSuccess
}



