let menuBtn = document.getElementById('sort-button')
let menu = document.getElementById('menu-sort')
let sortArrow = document.getElementById('sort-arrow')
console.log(menuBtn)


menuBtn.onclick = function(){
    menu.classList.toggle('open-sort-menu')
    sortArrow.classList.toggle('open-sort-arrow')
    console.log(menu)
}