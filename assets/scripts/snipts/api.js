'use strict'

const config = require('../config')
const store = require('../store')

// API call to create an snippet
const createOneSnip = function (formData) {
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

// API call to view all snippets
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

// API call to delete an snippet
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

// API call to update one snippet
const onUpdateSnippet = function (snippetId, formData) {
    return $.ajax({
        headers: {
            // Access the token on the `store.user` object. This only works if we sign in first
            Authorization: 'Bearer ' + store.user.token
        },
        url: config.apiUrl + '/snippets/' + snippetId,
        method: 'PATCH',
        data: formData
    })
}

module.exports = {
    createOneSnip,
    viewAllSnips,
    deleteSnippet,
    onUpdateSnippet
}