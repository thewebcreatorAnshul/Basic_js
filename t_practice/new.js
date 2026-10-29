var colour = document.querySelector('#color')
var red = document.querySelector('.red')
var green = document.querySelector('.green')
var blue = document.querySelector('.blue')
var random = document.querySelector('.random')
var count = document.querySelector('#count')

arr = ["red","blue","green","yellow","orange","purple","pink","brown","black","white","gray","cyan","magenta","lime","navy","teal","maroon","olive","silver","gold"];
let a = 0


red.addEventListener('click',function(){
    colour.style.background = 'red'
    updatecount()
})

green.addEventListener('click',function(){
    colour.style.background = 'green'
    updatecount()
})

blue.addEventListener('click',function(){
    colour.style.background = 'blue'
    updatecount()
})

random.addEventListener('click',function(){
    let c = Math.floor(Math.random()*arr.length)
    colour.style.background = arr[c]
    updatecount()
})

let updatecount = ()=>{
    a++
    count.innerHTML = a
}