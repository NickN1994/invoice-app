

function calcSubtotal (products) {

    let subtotal = 0;

    for (let i = 0; i < products.length; i++) {
        subtotal = subtotal + (products[i].amount * products[i].priceNoVat);
    }

    return subtotal.toFixed(2);

}

export default calcSubtotal;