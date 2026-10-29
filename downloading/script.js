var btn = document.querySelector('button')
var growth = document.querySelector('#growth')
var h3 = document.querySelector('h3')
grow = 0


btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    var a = setInterval(function(){
        grow++
        h3.innerHTML = grow +'%'
        growth.style.width = grow +'%'
    },50)

    setTimeout(() => {
        clearInterval(a)
    }, 5000);
})