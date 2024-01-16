function calcPriceUnitHelper(price, vat) {

    if (vat === 21) {
        const priceOfVat = price * (vat / 121);
        return price - priceOfVat;

    } if (vat === 9) {
        const priceOfVat = price * (vat / 109);
        return price - priceOfVat;
    } else {
        return price
    }

}

export default calcPriceUnitHelper;