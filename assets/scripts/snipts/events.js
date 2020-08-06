'use strict'
// require all the files on the API.
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')


const createSnippet = function (event) {
    event.preventDefault()
    const data = event.target
    const formData = getFormFields(data)

    console.log(formData)
    // check the information and send it to the API
    api.createOneSnip(formData)
        .then(ui.createOneSnipSuccess)
        .catch(ui.createOneSnipFailure)

}

const onViewSnippets = function (event) {
    event.preventDefault()
    api.viewAllSnips()
        .then(ui.viewAllSnipsSuccess)
        .catch(ui.viewAllSnipsFailure)
}

const onDeleteSnippet = function (event) {
    event.preventDefault()
    const id = $(event.target).closest('section').data('id')
    const test = $(`${id}`)
    console.log(test)
    console.log(id)

    api.deleteSnippet(id)
        .then(ui.deleteOneSnip)
        .catch('fail')
}


module.exports = {
    createSnippet,
    onViewSnippets,
    onDeleteSnippet
}