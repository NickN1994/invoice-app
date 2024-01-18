import './App.css'
import {Route, Routes} from "react-router-dom";
import Form from "./pages/Form.jsx";


// LOGO UPLOADEN? FACTUURGEGEVENS => naam, adres, GEGEVENS BEDRIJF => naam, adres, telefoonnr, bankrekeningnr, kvk nr, btw nr
// datum, factuurnummer
// amount, beschrijving product, prijs per unit, btw percentage, subtotaal, btw bedrag, totaal
// webite voor algemene voorwaarden
// binnen hoeveel dagen betalen
// tnv
// Reset functie voor nog een factuur maken, of alles laten staan om zo aan te passen wat gewenst is

function App() {

  return (
    <Routes>
      <Route path="/" element={<Form/>}/>
      {/*<Route path="/factuur" element={<Factuur/>}/>*/}
    </Routes>
  )
}

export default App
