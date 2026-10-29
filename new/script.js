var theme = localStorage.getItem('theme') || 'light'

document.body.setAttribute('class',theme)

document.querySelector('h2 span').innerHTML = theme