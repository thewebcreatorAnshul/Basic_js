var color = document.querySelector('.color')
var redbtn = document.querySelector('.btn.red')
var greenbtn = document.querySelector('.btn.green')
var bluebtn = document.querySelector('.btn.blue')
var randombtn = document.querySelector('.btn.random')
var countD = document.querySelector('#count')

var count = 0
var colour = ['red','green','blue','yellow','golden','violet','indigo','orange']

redbtn.addEventListener('click',function(){
    color.style.background = 'red'
    updatecount()
})

greenbtn.addEventListener('click',function(){
    color.style.background = 'green'
    updatecount()
})

bluebtn.addEventListener('click',function(){
    color.style.background = 'blue'
    updatecount()
})

randombtn.addEventListener('click',function(){
    var c = Math.floor(Math.random()* colour.length)
    color.style.background = colour[c]
    updatecount()
})

function updatecount(){
    count++
    countD.innerHTML = count
}
