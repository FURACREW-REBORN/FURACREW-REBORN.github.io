const menu_button = document.getElementById('menu_btn')
const arrow = document.getElementById('arrow')
const menu = document.getElementById('menu')


menu_button.onclick = function(event){
    arrow.classList.toggle('open-link')
    menu.classList.toggle('open-menu')

    
}

