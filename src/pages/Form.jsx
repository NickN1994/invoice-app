import {useEffect, useState} from "react";
import Formfield from "../components/FormField.jsx";
import {Link} from "react-router-dom";
import calcPriceUnitHelper from "../helpers/calcPriceUnitHelper.js";
import calcSubtotal from "../helpers/calcSubtotal.js";
import calcTotal from "../helpers/calcTotal.js";

function Form() {

    // bedrijfsgegevens
    const [date, setDate] = useState('');
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [street, setStreet] = useState('');
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [bankNumber, setBankNumber] = useState('');
    const [companyNumber, setCompanyNumber] = useState('');
    const [vatNumber, setVatNumber] = useState('');

    // KLANT GEGEVENS
    const [customerName, setCustomerName] = useState('');
    const [customerStreet, setCustomerStreet] = useState('');
    const [customerPostcode, setCustomerPostcode] = useState('');
    const [customerCity, setCustomerCity] = useState('');

    // product op invoice
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState(1);
    const [productName, setProductName] = useState('');
    const [vat, setVat] = useState(21);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        console.log(products)
    }, [products]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("De gegevens worden in de factuur gezet ");
    }

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
        <>
            <div className='outer-container'>
                <div className='inner-container shadow'>
                    <h1>Vul hieronder de gevraagde gegevens in om een factuur te maken</h1>
                    <form className='invoiceInfo'>
                        <div className="companyInfo">
                            <h2>Je bedrijfsgegevens</h2>
                            <Formfield
                                labelName="Je bedrijfsnaam"
                                type="text"
                                placeholder="Je bedrijfsnaam"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />

                            <Formfield
                                labelName="Straatnaam van je bedrijf"
                                type="text"
                                placeholder="Straatnaam"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                            />

                            <Formfield
                                labelName="Postcode van je bedrijf"
                                type="text"
                                placeholder="Postcode"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
                            />

                            <Formfield
                                labelName="Stad of dorp van je bedrijf"
                                type="text"
                                placeholder="Stad of dorp van je bedrijf"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />

                            <Formfield
                                labelName="Telefoonnummer van je bedrijf"
                                type="text"
                                placeholder="Telefoonnummer"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                            />

                            <Formfield
                                labelName="Bankrekening van je bedrijf"
                                type="text"
                                placeholder="Bankrekening van je bedrijf"
                                value={bankNumber}
                                onChange={(e) => setBankNumber(e.target.value)}
                            />

                            <Formfield
                                labelName="KVK nummer van je bedrijf"
                                type="text"
                                placeholder="KVK nummer"
                                value={companyNumber}
                                onChange={(e) => setCompanyNumber(e.target.value)}
                            />

                            <Formfield
                                labelName="Btw nummer van je bedrijf"
                                type="text"
                                placeholder="Btw nummer"
                                value={vatNumber}
                                onChange={(e) => setVatNumber(e.target.value)}
                            />

                            <Formfield
                                labelName="Datum"
                                type="text"
                                placeholder="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />

                            <Formfield
                                labelName="Factuurnummer        "
                                type="text"
                                placeholder="invoiceNumber"
                                value={invoiceNumber}
                                onChange={(e) => setInvoiceNumber(e.target.value)}
                            />

                        </div>

                        <div className="customerInfo">
                            <h2>Klantgegevens</h2>
                            <Formfield
                                labelName="Naam"
                                type="text"
                                placeholder="Naam"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                            />

                            <Formfield
                                labelName="Straat"
                                type="text"
                                placeholder="Straat"
                                value={customerStreet}
                                onChange={(e) => setCustomerStreet(e.target.value)}
                            />

                            <Formfield
                                labelName="Postcode"
                                type="text"
                                placeholder="Postcode"
                                value={customerPostcode}
                                onChange={(e) => setCustomerPostcode(e.target.value)}
                            />

                            <Formfield
                                labelName="Woonplaats"
                                type="text"
                                placeholder="Woonplaats"
                                value={customerCity}
                                onChange={(e) => setCustomerCity(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>

            <div className='outer-container'>

                <div className="inner-container shadow">
                    <form onClick={handleSubmit} className='addProduct'>
                        <h2>Voeg hier de producten of diensten toe</h2>
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
                            <label htmlFor="BtwPercentage"><p><strong>Btw percentage</strong></p></label>
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
                            labelName="Prijs in Euro"
                            type="number"
                            placeholder="0"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />

                        <button onClick={addProduct}>Product toevoegen</button>
                    </form>
                </div>
            </div>

            <div className='outer-container'>
                <div className='inner-container invoice'>
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
                        <p><strong>Graag het bedrag overmaken op bankrekeningnummer: {bankNumber} o.v.v. het
                            factuurnummer. </strong></p>
                    </div>

                </div>

            </div>


        </>


    )
}

export default Form;
