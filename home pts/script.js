var h4 = document.querySelector('h4')
var h1 = document.querySelector('h1')
var button = document.querySelector('button')

button.addEventListener('click',function() {
    var a  = Math.floor(Math.random()*10)
    h1.innerHTML = a
    
    if (a == 6){
        h4.innerHTML = 'winner'
        h4.style.color = 'green'
    }
    else {
        h4.innerHTML = 'loser'
        h4.style.color = 'red'      
    }
})