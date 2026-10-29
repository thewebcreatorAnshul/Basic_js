var body = document.querySelector('body')
var img = document.querySelector('img')

body.addEventListener('mousemove',function(dets){
    img.style.left = dets.x+'px'
    img.style.top = dets.y+'px'    
})