let plus = document.getElementsByClassName('basket-plus')
let number = document.getElementsByClassName('basket-price-number')
let minus = document.getElementsByClassName('basket-minus')

let productNumber = document.getElementById('product-number')

let bagPriceMount = document.getElementsByClassName('bag-price-mount-block')

let bagPrice = document.getElementsByClassName('bag-price')
let allPrice = document.getElementById('product-mount-all')

let deleteButton = document.getElementsByClassName('basket-price-delete')
let deleteAll = document.getElementsByClassName('basket-nav-list-item')
let cardsBlock = document.getElementsByClassName('basket-price-description')

let mount = []
let massMountNumber = []
let countNum = 0
let count = 0
console.log(count)
for(let i = 0; i < plus.length; i++){
    plus[i].onclick = function(){
        number[i].innerText++
        productNumber.innerText++
        if(plus[i].onclick){
           let count = bagPrice[i].innerText*number[i].innerText
           bagPriceMount[i].innerHTML = count
           
           countNum += Number(bagPrice[i].innerText)
           allPrice.innerText = countNum

           count = count
           
        }

    }
}

for(let i = 0; i < minus.length; i++){
    minus[i].onclick = () =>{
        number[i].innerText--  
        productNumber.innerHTML--
        
        if(number[i].innerText || productNumber.innerText <= 0){
            number[i].innerText = 0
            productNumber.innerText = 0
        }
    }
}


for(let i = 0; i< deleteAll.length; i++){
    deleteAll[i].onclick = function(){
        cardsBlock[i].style.display = 'none'

    }
}

for(let i = 0; i< deleteButton.length; i++){

    deleteButton[i].onclick = function(){
        console.log('Блок удален')
        
        for(let b = 0; b<bagPriceMount.length; b++){
            bagPriceMount[i].innerHTML
            console.log(bagPriceMount[i])
        }
       
        cardsBlock[i].style.display = 'none'
        
       
    }
}

for(let i = 0; i < number.length; i++){
    let count = bagPrice[i].innerText*number[i].innerText
    bagPriceMount[i].innerHTML = count 
}

for(let i = 0; i < number.length; i++){
    mount.push(bagPriceMount[i].innerText)

}

mount.forEach(function(item,index,array){
    massMountNumber.push(Number(item))
    
})

for(let i=0; i<allPrice.length; i++){
    console.log(allPrice[i])
}
count = massMountNumber.map(i=>x+=i, x=0).reverse()[0]
allPrice.innerText = countNum
