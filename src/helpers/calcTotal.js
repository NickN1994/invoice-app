

function calcTotal (products) {

    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total = total + (products[i].amount * products[i].price);
    }

    return total.toFixed(2);
}

export default calcTotal;