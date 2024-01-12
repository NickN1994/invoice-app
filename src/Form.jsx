import Formfield from "./Formfield.jsx";
import {useEffect, useState} from "react";


function Form () {

    // LOGO UPLOADEN? FACTUURGEGEVENS => naam, adres, GEGEVENS BEDRIJF => naam, adres, telefoonnr, bankrekeningnr, kvk nr, btw nr
// datum, factuurnummer
// amount, beschrijving product, prijs per unit, btw percentage, subtotaal, btw bedrag, totaal
// webite voor algemene voorwaarden
// binnen hoeveel dagen betalen
// tnv

    // bedrijfsgegevens
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
    const [vat, setVat] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(() => {
        console.log(products)
    }, [products]);


    const addProduct = () => {
        const newProduct = {
            name: productName,
            amount: amount,
            vat: vat,
            price: price
        }
        // console.log(products);
        setProducts([...products, newProduct]);
        // console.log(products);

        setProductName('');
        setAmount(1);
        setVat('');
        setPrice(0);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("De gegevens worden in de factuur gezet ");
    }

    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1>Vul hieronder de gevraagde gegevens in om een factuur te maken</h1>
                <h2>Je bedrijfsgegevens</h2>
                <form onSubmit={handleSubmit}>
                    <div className="companyInfo">
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
                                onChange={(e) => setVat(e.target.value)}
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

                </form>
            </div>
        </div>
    )
}

export default Form;
