let header_card = document.getElementById('rotate-card')
let header_cards = document.getElementsByClassName('code-card')
let heading = document.getElementsByClassName('header-heading')
let start = Date.now()

function draw(timePassed){
  for(card of header_cards){
    card.style.rotate = timePassed / 40 + 'deg'
  }
}  


let timer = setInterval(function(){
  let timePassed = Date.now() - start

  if(timePassed >= 999999){
    clearInterval(timer)
    return
  }

  draw(timePassed)

}, 20)


setInterval(function(){
  draw()
}, 20)