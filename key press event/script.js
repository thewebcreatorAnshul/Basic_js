var body = document.querySelector('body')
var h1 = document.querySelector('h1')

body.addEventListener('keypress',function(x){
    h1.innerHTML = x.code
    console.log(x);
    
})