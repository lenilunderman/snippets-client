'use strict'

const config = require('../config')
const store = require('../store')
// CREATE ONE SNIP
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

//view all snippets
const viewAllSnips = function () {
    return $.ajax({
        headers: {
            // Access the token on the `store.user` object. This only works if we sign in first
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/snippets',
        method: 'GET',
    })
}

//delete snippet
const deleteSnippet = function (snipID) {
    return $.ajax({
        headers: {
            // Access the token on the `store.user` object. This only works if we sign in first
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/snippets/' + snipID,
        method: 'DELETE'
    })
}


module.exports = {
    createOneSnip,
    viewAllSnips,
    deleteSnippet
}