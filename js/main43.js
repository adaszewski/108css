let dodawanie = def1 + def2;
let odejmowanie = def1 - def2;
let mnozenie = def1 * def2;
function wyniki(def1, def2) {
    if (dodawanie >= 0) {
        return "Wynik dodawania wynosi (dodawanie)"
    } else {
        return "Wynik jest nieprawidłowy"
    } {
        if (odejmowanie >= 0) {
            return "Wynik dodawania wynosi (odejmowanie)"
        } else {
            return "Wynik jest nieprawidłowy"
        }
    } {
        if (mnozenie >= 0) {
            return "Wynik dodawania wynosi (mnozenie)"
        } else {
            return "Wynik jest nieprawidłowy"
        }
    }
}
console.log(wyniki(1, 2))