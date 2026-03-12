const f = function (valore) {
  const f = console.log(valore);
};

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let rettangolo = l1 * l2;
  return rettangolo;
};

let rettangolo = area(10, 5);
f("risultato rettangolo = " + rettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let crazySumRis = n1 + n2;
  if (n1 === n2) {
    crazySumRis = crazySumRis * 3;
  }
  return crazySumRis;
};

let crazySumRis = crazySum(3, 2);
f("risultato crazysumris 3, 2 = " + crazySumRis);
crazySumRis = crazySum(2, 2);
f("risultato crazysumris 2, 2 = " + crazySumRis);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1) {
  let crazyDiffRis = n1 - 19;
  if (crazyDiffRis > 19) {
    crazyDiffRis = crazyDiffRis * 3;
  }
  return crazyDiffRis;
};

let crazyDiffRis = crazyDiff(20);
f("risultato crazydiffris 20 = " + crazyDiffRis);

crazyDiffRis = crazyDiff(40);
f("risultato crazydiffris 40 = " + crazyDiffRis);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  let verifica = "";
  if ((n >= 20 && n <= 100) || n === 400) {
    verifica = true;
  } else {
    verifica = false;
  }
  return verifica;
};

let verifica = boundary(20);
f("boundary 20 " + verifica);
verifica = boundary(50);
f("boundary 50 = " + verifica);
verifica = boundary(100);
f("boundary 100 = " + verifica);
verifica = boundary(400);
f("boundary 400 = " + verifica);
verifica = boundary(5);
f("boundary 5 = " + verifica);
verifica = boundary(500);
f("boundary 500 = " + verifica);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (s) {
  let epifys = "EPICODE ";
  if (s !== epifys) {
    epifys = epifys + s;
  }
  return epifys;
};

let epifys = epify("corso ");
f(epifys);
epifys = epify("EPICODE ");
f(epifys);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function (n) {
  let numero = "";
  if (n % 3 === 0 || n % 7 === 0) {
    numero = true;
  } else {
    numero = false;
  }
  return numero;
};

let multiplo = check3and7(15);
f("15 = " + multiplo);
multiplo = check3and7(70);
f("70 = " + multiplo);
multiplo = check3and7(22);
f("22 = " + multiplo);
multiplo = check3and7(21);
f("21 = " + multiplo);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = function (s) {
  let string = s;
  let reverse = string.split("").reverse().join("");
  return reverse;
};

let reverse = reverseString("EPICODE");
f(reverse);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let prova = "stringadiprova";
prova.split("");
f(prova);

//const upperFirst = function(s){
//    let s = s.split("")
//    let maiusc = []
//    let maiuscolo =
//}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = function (s) {
  let string = s;
  let cut = string.split("").slice(1, -1).join("");
  return cut;
};

let cut = cutString("EPICODE");
f(cut);
cut = cutString("prova");
f(cut);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  let numero = [];
  for (let i = 0; i < n; i++) {
    random = Math.floor(Math.random() * 11);
    numero.push(random);
  }
  return numero;
};

let numero = giveMeRandom(10);
f(numero);
numero = giveMeRandom(5);
f(numero);
numero = giveMeRandom(6);
f(numero);
