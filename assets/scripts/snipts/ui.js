const createOneSnipSuccess = function (response) {
    $('.create-snip-message').text('You created a snippet successfully.').addClass('alert alert-success').fadeIn(500)
    $('.create-snip-message').fadeOut(4500)
    $('#create-snip :input').val('')

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