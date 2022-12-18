function sliderButtons(button){
  $(button).click(function(){
    const ProductList = $('.best-product-card-item')
    const ProductListNext = $('.next-block')
    
    // console.log(ProductListNext[0].style.display)

    ProductList.hide(1000)
    ProductListNext.show(1000)
    if(ProductList[0].style.display == 'none'){

      if(ProductListNext[0].style.display == 'list-item'){
        ProductListNext.hide(1000)
        ProductList.show(1000)
      }
      }
    })
}

const one = '#slider-arrow-next'
const two = '#slider-arrow-prev'

$(document).ready(function(){
  sliderButtons('#slider-arrow-next')
  sliderButtons('#slider-arrow-prev')
})
