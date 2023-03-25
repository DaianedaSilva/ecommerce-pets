function subtract_quantity () {
    let quantity = document.querySelector("#product-quantity").value;
    let quantity_number = parseInt(quantity);
    let new_quantity = quantity_number - 1;
}

function changeImage(img){
    let img_src = img.src

    if( img_src.includes("filled")){
        img.src= '../../src/heart.png'
    }else{
        img.src= '../../src/filled-heart.png'
    }
}