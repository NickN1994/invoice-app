import calcSubtotal from "../helpers/calcSubtotal.js";
import calcTotal from "../helpers/calcTotal.js";
import calcPriceUnitHelper from "../helpers/calcPriceUnitHelper.js";
import Formfield from "../components/FormField.jsx";
import {useEffect, useState} from "react";



function Factuur() {

    // product op invoice
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState(1);
    const [productName, setProductName] = useState('');
    const [vat, setVat] = useState(21);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        console.log(products)
    }, [products]);

    let idCounter = 1;

    const addProduct = () => {
        const newProduct = {
            key: idCounter++,
            name: productName,
            amount: amount,
            vat: vat,
            priceNoVat: calcPriceUnitHelper(price, vat),
            price: price
        }
        // console.log(products);
        setProducts([...products, newProduct]);
        // console.log(products);

        setProductName('');
        setAmount(1);
        setVat(21);
        setPrice(0);
    }



    return (
        <div>

            <div className="addProduct">

                <Formfield
                    labelName="Aantal"
                    type="number"
                    // placeholder="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <Formfield
                    labelName="Naam product of dienst"
                    type="text"
                    placeholder="Naam product of dienst"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />

                <section>
                    <label htmlFor="BtwPercentage">Btw percentage</label>
                    <select
                        name="vat"
                        id="vat"
                        value={vat}
                        onChange={(e) => setVat(parseInt(e.target.value))}
                    >
                        <option value="21">21%</option>
                        <option value="9">9%</option>
                        <option value="0">0%</option>
                    </select>
                </section>

                <Formfield
                    labelName="Prijs"
                    type="number"
                    placeholder="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button onClick={addProduct}>Product toevoegen</button>
            </div>


            <div>
                <section>
                    <h3>Factuuradres:</h3>
                    <p>{customerName}</p>
                    <p>{customerStreet}</p>
                    <p>{customerPostcode}</p>
                    <p>{customerCity}</p>
                </section>
                <section>
                    <h3>{companyName}</h3>
                    <p>{street}</p>
                    <p>{postcode}</p>
                    <p>{city}</p>
                    <p>{phonenumber}</p>
                    <p>IBAN: {bankNumber}</p>
                    <p>Kvk: {companyName}</p>
                    <p>Btw nummer: {vatNumber}</p>
                </section>
                <section>
                    <p><strong>Datum:</strong> {date}</p>
                    <p><strong>Factuurnummer:</strong> {invoiceNumber}</p>
                </section>
                <section>
                    {/* PRODUCTEN OP FACTUUR    */}
                    <div>
                        <p><strong>Beschrijving</strong></p>
                        {products && products.map((product) => {
                            return (
                                <>
                                    <p>{product.name}</p>
                                </>
                            )
                        })}
                    </div>
                    <div>
                        <p><strong>Aantal</strong></p>
                        {products && products.map((product) => {
                            return (
                                <>
                                    <p>{product.amount}</p>
                                </>
                            )
                        })}
                    </div>

                    <div>
                        <p><strong>Prijs excl. Btw</strong></p>
                        {products && products.map((product) => {
                            return (
                                <>
                                    <p>{(product.priceNoVat * product.amount).toFixed(2)}</p>
                                </>
                            )
                        })}
                    </div>

                    <div>
                        <p><strong>Btw</strong></p>
                        {products && products.map((product) => {
                            return (
                                <>
                                    <p>{product.vat}%</p>
                                </>
                            )
                        })}
                    </div>

                    <div>
                        <p><strong>Prijs incl. Btw</strong></p>
                        {products && products.map((product) => {
                            return (
                                <>
                                    <p>€{(product.price * product.amount).toFixed(2)}</p>
                                </>
                            )
                        })}
                    </div>
                </section>

                {/* HELPER AANMAKEN NOG OM SUBTOTAAL ETC. TE BEREKENEN*/}

                <div>
                    <section>
                        <p><strong>Subtotaal: </strong></p>
                        <p>€{calcSubtotal(products)}</p>
                    </section>
                    <section>
                        <p><strong>Btw bedrag: </strong></p>
                        <p>€{(calcTotal(products) - calcSubtotal(products)).toFixed(2)}</p>
                    </section>
                    <section>
                        <p><strong>Totaal incl. btw: </strong></p>
                        <p>€{calcTotal(products)}</p>
                    </section>
                </div>

                <div>
                    <p><strong>Graag het bedrag overmaken op bankrekeningnummer {bankNumber} en het factuurnummer erbij
                        vermelden.</strong></p>
                </div>

            </div>

        </div>

    )
}

export default Factuur;
