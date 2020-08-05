'use strict'

const config = require('../config')
const store = require('../store')

const createOneSnip = function (formData) {
    console.log(formData)
    return $.ajax({
        headers: {
            // Access the token on the `store.user` object. This only works if we sign in first
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/snippets',
        method: 'POST',
        data: formData
    })
}

module.exports = {
    createOneSnip
}