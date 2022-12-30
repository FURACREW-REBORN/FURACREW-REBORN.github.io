let catalogCard = document.getElementsByClassName('catalog-item')
let bestProduct = document.getElementsByClassName('best-product-item')
 
let catalogCardPrice = document.getElementsByClassName('best-product-mount-money')
let allSortButton = document.getElementsByClassName('catalog-sort-menu-item')
for(let i = 0; i < allSortButton.length; i++){
    allSortButton[i].onclick = function(){

        if(allSortButton[i].id == 'all-catalog'){
            for(let i = 0; i < catalogCard.length; i++){
                catalogCard[i].style.display = 'block'
            }
        }

        if(allSortButton[i].id == 'cheap-catalog'){
            for(let i = 0; i < catalogCardPrice.length; i++){

                if(Number(catalogCardPrice[i].innerHTML) <= 1000){
                    catalogCard[i].classList.add('cheap-card')
                    console.log(catalogCard[i].className)
                    catalogCardPrice[i].classList.add('cheap-card-price')

                    if(catalogCard[i].classList.contains('cheap-card') == true){
                       if(catalogCard[i].style.display == 'none'){
                        catalogCard[i].style.display = 'block'
                       }
                    }

                }
                
                if(catalogCardPrice[i].classList.contains('cheap-card-price') != true){
                    catalogCard[i].style.display = 'none'
                }


            }
        }

        if(allSortButton[i].id == 'expensive-catalog'){
            for(let i = 0; i < catalogCardPrice.length; i++){
                if(Number(catalogCardPrice[i].innerHTML) > 1000){
                    catalogCard[i].classList.add('expensive-card')
                    catalogCardPrice[i].classList.add('expensive-card-price')
                    console.log(catalogCardPrice[i].className)

                    if(catalogCard[i].classList.contains('expensive-card') == true){
                        if(catalogCard[i].style.display == 'none'){
                         catalogCard[i].style.display = 'block'
                        }
                     }

                }

                if(catalogCardPrice[i].classList.contains('expensive-card-price') != true){
                    catalogCard[i].style.display = 'none'
                }
                


            }
        }

        if(allSortButton[i].id == 'Best-sellers'){
            for(let i = 0; i < catalogCard.length; i++){

                if(catalogCard[i].classList.contains('best-product-item') == true){
                    if(catalogCard[i].style.display == 'none'){
                        catalogCard[i].style.display = 'block'
                       }
                }

                if(catalogCard[i].classList.contains('best-product-item') != true){
                    catalogCard[i].style.display = 'none'
                }
            } 
        }       


        if(allSortButton[i].id == 'in-stock'){
            for(let i = 0; i < catalogCard.length; i++){
                catalogCard[i].style.display = 'block'
            }
        }
    }
}                