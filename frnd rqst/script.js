var button = document.querySelector('button')
var h5 = document.querySelector('h5')
var isfrnd = false;
button.addEventListener('click', function () {
    button.disabled = true
    if (isfrnd == false) {
        h5.innerHTML = 'Sending request....'
        h5.style.color = 'yellow'
        setTimeout(function () {
            h5.innerHTML = 'Friends'
            h5.style.color = 'Green'
            button.innerHTML = 'remove friend'
            isfrnd = true
            button.disabled = false
        }, 3000)
        
        
    }
    else {
        h5.innerHTML = 'removing friend....'
        h5.style.color = 'maroon'
        setTimeout(function () {
            h5.innerHTML = 'Stranger'
            h5.style.color = 'crimson'
            button.innerHTML = 'Add friend'
            isfrnd = false
            button.disabled = false
        }, 3000)
    }
})
