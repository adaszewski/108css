function wyniki(def1, def2) {
    let dodawanie = def1 + def2;
    let odejmowanie = def1 - def2;
    let mnozenie = def1 * def2;
    if (dodawanie >= 0) {
        console.log(`Wynik dodawania wynosi ${dodawanie}`)
    } else {
        console.log("Wynik jest nieprawidłowy")
    }
    if (odejmowanie >= 0) {
        console.log(`Wynik odejmowania wynosi ${odejmowanie}`)
    } else {
        console.log("Wynik jest nieprawidłowy")
    }
    if (mnozenie >= 0) {
        console.log(`Wynik mnożenia wynosi ${mnozenie}`)
    } else {
        console.log("Wynik jest nieprawidłowy")
    }
}
(wyniki(1, 2))