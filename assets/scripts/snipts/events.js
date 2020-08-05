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

module.exports = {
    createSnippet
}