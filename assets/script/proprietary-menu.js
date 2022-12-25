let menuBtn = document.getElementById('sort-button')
let menuSort = document.getElementById('menu-sort')
let sortArrow = document.getElementById('sort-arrow')

menuBtn.onclick = function(){
    menuSort.classList.toggle('open-sort-menu')
    sortArrow.classList.toggle('open-sort-arrow')
}