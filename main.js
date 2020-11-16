/* JSNACK1
* Creare un array di oggetti
* ogni oggetto descriverà una bici da corsa con seguenti proprietà: nome e peso
* stampare a schermo la bici con peso minore con handlebars
*/

// $(document).ready(function(){
//     const catalogo = [
//         {
//             nome: "Bianchi",
//             peso: 10.1,
//         },
//         {
//             nome:"Rossi",
//             peso: 7
//         },
//         {
//             nome: "Rummi",
//             peso: 6
//         }
//     ];

    // valore default
//     let biciclettaLeggera = null;

//     catalogo.forEach(element =>{
//         if(biciclettaLeggera == null || biciclettaLeggera.peso > element.peso){
//             biciclettaLeggera = element;
//         }
//     });

//     const{nome, peso} = biciclettaLeggera;

//     $('.container').html (`<div>
//     <h1>Bicicletta più leggera</h1>
//     <h3>nome: ${nome} </h3>
//     <h4>peso: ${peso} kg </h4>
//     <div/>`    )
// });





/**
 * JSNACK2
 * Partendo da un array di nomi (scelti da noi) creaimo un nuovo array.
 * Chiedere due numeri all' utente per definire la posizione iniziale e finale dal quale estrarre
 * i valori dell' array originale.
 * il nuovo array deve contenere gli elementi dell' array originale aventi la posizione (indice array)
 *  compresa tra i due numeri inseriti dall' utente.
 */

//  $(document).ready(function(){

//     const nomi = ['Franco', 'Luigi', 'Filippo', 'Alessandro', 'Adele', 'Alessia'];
//       const array = nomi.length - 1;

//       const min = parseInt( prompt('Inserisci un valore da 1 a ' + array) );
//       while (isNaN(min) || min < 1 || min > array) {
//         min = parseInt( prompt('Inserisci un valore da 1 a ' + array) );
//       }

//       const max = parseInt( prompt('Inserisci un valore da 1 a ' + array) );
//       while (isNaN(max) || max < min || max > array) {
//         max = parseInt( prompt('Inserisci un valore da 1 a ' + array) );
//       }


//       let nuoviNomi = [];
//       nuoviNomi = nomi.filter( (element, index) => {
//           if (index >= min && index <= max) {
//               return element
//         } 
//       });


//     console.log('I nomi selezionati nel range tra ' + min + ' e ' + max + ' sono:\n' + nuoviNomi);
//  });





  /**
  * 
  * JSnack 3
  * Creiamo un array di oggetti (scelti da voi)
  * Creiamo una copia da questo array di partenza e aggiungiamo ai singoli
  * elementi una nuova proprietà position che contiene una lettera casuale.
  * Non dobbiamo modificare l'array iniziale.
  * 
  */

$(document).ready(function(){

    // creo una lista
    const lista = [
        {nomeServer: "DiscordGameIta", proprietarioServer: "Taurs", numStanze: 5},
        {nomeServer: "LediveITA", proprietarioServer: "Elenor", numStanze: 3},
        {nomeServer: "PROplayers", proprietarioServer: "Tutubi", numStanze: 10},
        {nomeServer: "Fanpewdipie", proprietarioServer: "Alex", numStanze: 6}
    ]
   
    // creo duplicato array
    const nuovaLista = lista.map( elemento =>{
        return {
            ...elemento,
            position: randomLettera()
        }
    });

    console.table(nuovaLista);

    function randomLettera(){
        var lettere = "abcdefghijklmnopqrstuvwxyz";
        var lettera = lettere[randomNumero(0, lettere.length - 1)];
        return lettera;
    }

    function randomNumero(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

});