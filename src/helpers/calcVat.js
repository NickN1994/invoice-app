//
//
// export default function calcVat (products) {
//
//     let btw21 = 0;
//     let btw9 = 0;
//     let btw0 = 0;
//
//     let btwTotal = 0;

    // if (products[i].vat === 21) {
    //     for (let i = 0; i < products.length; i++) {
    //         const vat = (products[i].price * (products[i].vat / 121));
    //         btw21 = btw21 + (products[i].price - vat);
    //     }
    //
    //     else if (products[i].vat === 9) {
    //         for (let i = 0; i < products.length; i++) {
    //             const vat = (products[i].price * (products[i].vat / 109));
    //             btw9 = btw9 + (products[i].price - vat);
    //         }
    //     } else {
    //         for (let i = 0; i < products.length; i++) {
    //             const vat = (products[i].price * (products[i].vat / 109));
    //             btw0 = btw0 + (products[i].price - vat);
    //         }
    //     }


//         for (let i = 0; i < products.length; i++) {
//             if (products[i].vat === 21) {
//                 const vat = (products[i].price * (products[i].vat / 121));
//                 btwTotal = btwTotal + (products[i].price - vat);
//             }
//             else if (products[i].vat === 9) {
//                 const vat = (products[i].price * (products[i].vat / 109));
//                 btwTotal = btwTotal + (products[i].price - vat);
//             } else {
//                 btwTotal = btwTotal + products.price
//             }
//
//         }
//
//         return btwTotal.toFixed(2);
//
//
//
// }