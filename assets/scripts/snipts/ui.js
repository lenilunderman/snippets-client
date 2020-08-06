   const snipTemplate = require('../templates/snippetsData.handlebars')
   //const snipPageHTML = snipTemplate({snippet: response.snippet})
//  $('#test-hand').append(snipPageHTML)

const createOneSnipSuccess = function (response) {
    console.log('the data is:', response.snippet)
    $('.create-snip-message').text('You created a snippet successfully.').addClass('alert alert-success').fadeIn(500)
    $('.create-snip-message').fadeOut(4500)
    $('#create-snip :input').val('')
    const snipPageHTML = snipTemplate({snippet: response.snippet})
    $('#test-hand').append(snipPageHTML)

}

const createOneSnipFailure = function (response) {
    $('.create-snip-message').text('Sorry, you were not able to create a snipppet at this time.').addClass('alert alert-danger').fadeIn(500)
    $('.create-snip-message').fadeOut(4500)
    $('#create-snip :input').val('')
}

module.exports = {
    createOneSnipSuccess,
    createOneSnipFailure
}