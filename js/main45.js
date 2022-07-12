let par1 = document.getElementById("imie");
let par2 = document.getElementById("nazwisko");
let par3 = document.getElementById("telefon");
let przycisk = document.querySelector('#wyswietl');
przycisk.onclick = function () {
    fname.textContent = par1.value;
    surname.textContent = par2.value;
    phone.textContent = par3.value;
}