const snipTemplate = require('../templates/snippetsData.handlebars')
const snipTemplateAll = require('../templates/snippetsViewAll.handlebars')
const store = require('../store')
const { viewAllSnips } = require('./api')

const createOneSnipSuccess = function (response) {
    console.log('the data is:', response.snippet)
    $('.create-snip-message').text('You created a snippet successfully.').addClass('alert alert-success').fadeIn(500)
    $('.create-snip-message').fadeOut(4500)
    $('#create-snip :input').val('')
    const snipPageHTML = snipTemplate({ snippet: response.snippet })
    $('#test-hand').append(snipPageHTML)

}

const createOneSnipFailure = function (response) {
    $('.create-snip-message').text('Sorry, you were not able to create a snipppet at this time.').addClass('alert alert-danger').fadeIn(500)
    $('.create-snip-message').fadeOut(4500)
    $('#create-snip :input').val('')
}

// view all snippets
const viewAllSnipsSuccess = function (response) {
    console.log('storage: ', store.snippet) //client
    console.log('response snippets:', response.snippet) // server info
    console.log('response: ', response)
    const snipPageHTMLAll = snipTemplateAll({ snippet: response.snippet })
    $('.viewFullSnips').empty()
    $('.viewFullSnips').append(snipPageHTMLAll)
}

const viewAllSnipsFailure = function () {
    console.log('Error snip failures')
}

const deleteOneSnip = function (event) {
    $('.viewFullSnips').empty()
    console.log('deleted sucessufully.')
}





module.exports = {
    createOneSnipSuccess,
    createOneSnipFailure,
    viewAllSnipsSuccess,
    viewAllSnipsFailure,
    deleteOneSnip
}