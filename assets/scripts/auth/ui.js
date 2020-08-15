'use strict'
const store = require('../store')
const { css } = require('jquery')

const SignUpSuccess = function () {
    $('.create-account-message').addClass('alert alert-info mt-4').show()
    $('.create-account-message').text('The account was created successfully.').fadeToggle(5000)
    $('#create-account :input').val('')
}

const SignUpFailure = function () {
    $('.create-account-message').addClass('alert alert-info mt-4').show()
    $('.create-account-message').text('Please fill the form to create an account.').fadeToggle(6000)
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
    const userEmailInfo = store.user.email
    $('.user-greetings').text(`Welcome to the website user: ${userEmailInfo}`)
}

const SignInFailure = function () {
    $('.sign-in-message-error').addClass('alert alert-info').show()
    $('.sign-in-message-error').text('Your username or password is incorrect!').fadeToggle(7000)
}

const ChangePasswordSuccess = function () {
    $('#snippets').show()
    $('#snippets-cards').show()
    //hide events
    $('#snippets').show()

    if ($('.change-password-message').text() === '') {
        $('.change-password-message').text('You successfully changed the password.').addClass('alert alert-info mt-2').fadeOut(5000, function () {
            $('.change-password-message').removeClass('alert alert-info mt-2').show().text('')
        })
    }

    $('.change-password-message').text('You successfully changed the password.').fadeOut(6000)
    $('#change-password :input').val('')
    $('.change-password-container').show()
}

const ChangePasswordFailure = function () {
    if ($('.change-password-message').text() === '') {
        $('.change-password-message').text('Ops... there is an error, your old password does not match.').addClass('alert alert-danger mt-2').fadeOut(4500, function () {
            $('.change-password-message').removeClass('alert alert-danger mt-2').show().text('')
        })
    }


    //$('.change-password-message').text('Ops... there is an error, your old password does not match.')
}

const signOutSuccess = function () {
    $('.second-page').hide()
    $('nav').hide()
    $('.viewFullSnips').hide()
    $('.user-dashboard').hide()
    $('.sign-in-message-error').removeClass('alert alert-info').hide()
    $('.create-account-message').removeClass('alert alert-info mt-4').hide()

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



