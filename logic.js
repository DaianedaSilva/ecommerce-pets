function changeImage(img){
    let img_src = img.src

    if( img_src.includes("filled")){
        img.src= '../../src/heart.png'
    }else{
        img.src= '../../src/filled-heart.png'
    }
}

function update_shop_price(quantity) {
    let product_price = parseInt(document.getElementById('product-price').textContent);
    let new_price = (product_price * quantity).toFixed(2);

    document.getElementById('shop-price').innerHTML = new_price.toString();
}

function subtract_quantity() {
    let quantity = parseInt(document.getElementById('product-quantity').textContent);
    let new_quantity = (quantity > 0) ? --quantity : 0;

    document.getElementById('product-quantity').innerHTML = new_quantity.toString();
    update_shop_price(new_quantity);
}

function add_quantity() {
    let quantity = parseInt(document.getElementById('product-quantity').textContent);
    let new_quantity = ++quantity;

    document.getElementById('product-quantity').innerHTML = new_quantity.toString();
    update_shop_price(new_quantity);
}