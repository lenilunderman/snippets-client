const snipTemplate = require('../templates/snippetsData.handlebars')
const snipTemplateAll = require('../templates/snippetsViewAll.handlebars')
const store = require('../store')
const { viewAllSnips } = require('./api')

// function to display that the snippet was created successfully.
const createOneSnipSuccess = function (response) {
    //add a message to the user after creating an snippet
    $('.create-snip-message').text('You created a snippet successfully.').addClass('alert alert-success').fadeIn(500)
    $('.create-snip-message').fadeOut(4500)
    //clear the fields of the input
    $('#create-snip :input').val('')
    const snipPageHTML = snipTemplate({ snippet: response.snippet })

    ////! I still need to display one snippet, it is already created, just need to be connected.
    $('#test-hand').append(snipPageHTML)
}

// function in case the snippet was not created successfully
const createOneSnipFailure = function (response) {
    $('.create-snip-message').text('Sorry, you were not able to create a snipppet at this time.').addClass('alert alert-danger').fadeIn(500)
    $('.create-snip-message').fadeOut(4500)
    $('#create-snip :input').val('')
}

// function to view all the snippets created an user
const viewAllSnipsSuccess = function (response) {
    //console.log('storage: ', store.snippet) // client object response
    //console.log('response snippets:', response.snippet) // server info

    // adding the response inside the handlebars 'snippetsViewAll.handlebars'
    const snipPageHTMLAll = snipTemplateAll({ snippet: response.snippet })
    // cleaning all the fields, before displaying
    $('.viewFullSnips').empty()
    // displaying all the snippets updated.
    $('.viewFullSnips').append(snipPageHTMLAll)
}

// function to diplay an error in case there are no snippets.
const viewAllSnipsFailure = function () {
    console.log('Error snip failures')
}

// function that deletes an snippet and then refresh the page.
const deleteOneSnip = function (event) {
    // clear the fields, forcing the user to click on view all again, to see the data.
    $('.viewFullSnips').empty()
}

module.exports = {
    createOneSnipSuccess,
    createOneSnipFailure,
    viewAllSnipsSuccess,
    viewAllSnipsFailure,
    deleteOneSnip
}