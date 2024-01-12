function calcPriceUnitHelper(price, vat) {

    const priceOfVat = price * (vat / 100);
    const priceWithoutVat = price - priceOfVat;

    return priceWithoutVat;
}

export default calcPriceUnitHelper;