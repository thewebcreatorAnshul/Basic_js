var btn = document.querySelector('button')
var box = document.querySelector('#box')

var names = ['adarsh', 'anshul', 'ankit', 'choubey', 'vikas', 'sunny', 'himesh']

btn.addEventListener('click', function () {
    var h1 = document.createElement('h1')

    var x = Math.floor(Math.random() * 90)
    var y = Math.floor(Math.random() * 90)  
    var s = Math.floor(Math.random() * names.length)
    var rot = Math.random() * 360

    h1.style.position = 'absolute'
    h1.style.height = '50px'
    h1.style.left = x + '%'
    h1.style.top = y + '%'
    h1.style.rotate = rot + 'deg'


    h1.innerHTML = names[s]
    box.appendChild(h1)
    console.log(h1);

})
