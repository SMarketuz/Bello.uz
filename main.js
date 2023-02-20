'use struct'


let leftNav = document.querySelector('.leftNav')
let bars = document.getElementById('bars')
let xmark = document.querySelector('#xmark')
let hed = document.querySelector('.navbar')

bars.addEventListener('click',(e)=> {
    hed.style.display = 'none'
    leftNav.style.display = 'block'
})
xmark.addEventListener('click',(e)=> {
    hed.style.display = 'block'
    leftNav.style.display = 'none'
    hed.style.display = 'flex'
})
