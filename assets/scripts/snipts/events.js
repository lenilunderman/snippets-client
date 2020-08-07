'use strict'
// require all the files on the API.
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// function to create a new snippet
const createSnippet = function (event) {
    event.preventDefault()
    const data = event.target
    const formData = getFormFields(data)

    // check the information and send it to the API
    api.createOneSnip(formData)
        .then(ui.createOneSnipSuccess)
        .catch(ui.createOneSnipFailure)
}
// function to view all snippets
const onViewSnippets = function (event) {
    event.preventDefault()
    api.viewAllSnips()
        .then(ui.viewAllSnipsSuccess)
        .catch(ui.viewAllSnipsFailure)
}
// function to delete one snippet
const onDeleteSnippet = function (event) {
    event.preventDefault()
    const id = $(event.target).closest('section').data('id')
    const test = $(`${id}`)
    api.deleteSnippet(id)
        .then(ui.deleteOneSnip)
        .catch('fail')
}
// function to select an snippet and insert inside the form
const onSelectSnippet = function (event) {
    event.preventDefault()
    $('#snippets').hide()
    $('.snippets-container-update').show()
    $('#snippets-cards').hide()
    // get the data-id from the form ' the id' in that case is the resource id.
    const id = $(event.target).closest('section').data('id')

    //grab the information from the form...
    const typeSnip = $(event.target).closest('section').find('.snippet-type span').text()
    const informationSnip = $(event.target).closest('section').find('.snippet-information span').text()
    const contentSnip = $(event.target).closest('section').find('.snippet-content span').text()

    // select the form that will receive the data and insert the information
    $('#update-snip').attr('data-id', id)
    $('#update-snip #type').val(typeSnip)
    $('#update-snip #information').val(informationSnip)
    $('#update-snip #content').val(contentSnip)
}
// functuin to update one snippet
const onUpdateSnippet = function (event) {
    event.preventDefault()
    // this is the same id referent to the 'id resource' to be passed as id.
    const id = $('#update-snip').data('id')
    // using the getFormFields, insert the whole form with the data inside.
    // in this case form, will return a list, so, the [0] so select the first item of the array.
    // returns the firls element of the array, in that case the form itself.
    const formData = getFormFields($('#update-snip')[0])
    // pass two arguments for the function, the ID of the resource, and the data.
    api.onUpdateSnippet(id, formData)
        .then(ui.onUpdateOneSnipSuccess)
        .catch('doesnt work')
}

module.exports = {
    createSnippet,
    onViewSnippets,
    onDeleteSnippet,
    onSelectSnippet,
    onUpdateSnippet
}