function changeImage(img){
    let img_src = img.src

    if( img_src.includes("filled")){
        img.src= '../../src/heart.png'
    }else{
        img.src= '../../src/filled-heart.png'
    }
}

function subtract_shop_price( price) {
    let atual_price = parseInt(document.getElementById('shop-price').innerHTML);

    if(atual_price != 0){
        let new_price = parseInt(atual_price - price).toFixed(2) ;
        document.getElementById('shop-price').innerHTML = new_price.toString();
    }
}

function add_shop_price( price) {
    let atual_price = parseInt(document.getElementById('shop-price').innerHTML);
    
    let new_price = parseInt(atual_price + price).toFixed(2);
    document.getElementById('shop-price').innerHTML = new_price.toString();
}


function subtract_quantity(product_quantity) {
    let quantity = parseInt(product_quantity.nextElementSibling.textContent);
    let price =  parseInt(product_quantity.parentNode.querySelector('#product-price').textContent);

    if(quantity > 0){
        --quantity
        subtract_shop_price(price);
    }

    product_quantity.nextElementSibling.innerHTML= quantity.toString();
    
}

function add_quantity(product_quantity) {
    let price = parseInt(product_quantity.parentNode.querySelector('#product-price').textContent);

    let quantity =  parseInt(product_quantity.previousElementSibling.textContent);

    let new_quantity = ++quantity;

    product_quantity.previousElementSibling.innerHTML = new_quantity.toString();

    add_shop_price(price);
    
}


/** Cart Logic **/
window.onload= function (){
    update_cart_price();
    update_number_of_item();
}

function update_cart_price(){
    let prices= document.querySelectorAll('.product-price');

    console.log('test');
    
    let price_total = 0 

    for (price of prices){
        console.log(price.innerHTML)
        price_total = price_total + parseInt(price.innerHTML);
    }

    document.getElementById('shop-price').innerHTML = price_total.toFixed(2).toString();
}

function update_number_of_item(){
    let quantity= document.querySelectorAll('.product').length
   document.querySelector('.header-quantity-product').innerHTML = quantity.toString();

}

function add_quantity_of_cart(product_quantity) {
    let product_price = parseInt(product_quantity.parentNode.querySelector('#product-price').textContent);
    let quantity =  parseInt(product_quantity.previousElementSibling.textContent);
    let unit_price = product_price / quantity
    let new_quantity = ++quantity;
    let new_product_price = (unit_price * new_quantity).toFixed(2);

    product_quantity.previousElementSibling.innerHTML = new_quantity.toString();
    product_quantity.parentNode.querySelector('#product-price').innerHTML = new_product_price.toString();

    update_cart_price()
}

function subtract_quantity_of_cart(product_quantity) {
    let product_price = parseInt(product_quantity.parentNode.querySelector('#product-price').textContent);
    let quantity =  parseInt(product_quantity.nextElementSibling.textContent);
    let unit_price = product_price / quantity

    console.log(product_price)
    console.log(quantity)
    console.log(unit_price)

    if(quantity > 1){
        let new_quantity = --quantity;
        let new_product_price = (unit_price * new_quantity).toFixed(2);

        product_quantity.nextElementSibling.innerHTML= quantity.toString();
        product_quantity.parentNode.querySelector('#product-price').innerHTML = new_product_price.toString();
        update_cart_price()
    
    }
}

function drop_card(svg){
    svg.parentNode.parentNode.parentNode.remove()
    update_cart_price()
    update_number_of_item()
}