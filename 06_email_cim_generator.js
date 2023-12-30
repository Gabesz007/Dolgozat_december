// 6)E-mail cím generátor
// Egy levelező szolgáltatássall saját e-mail fiókot hozhatunk létre. A fiók létrehozásakor
// megadjuk a teljes nevünket és a születési évünket, majd ezekből a rendszer generál
// egy javasolt e-mail címet a következőképpen:
// • vesszük a teljes névben szereplő összes szóközzel elválasztott névnek az
// első 3 betűjét, csupa kisbetűvel (ha egy ilyen string rövidebb 3 betűnél, akkor
// a teljes stringet vesszük)
// • ezután vesszük a születési év utolsó számjegyét
// • végül az így kapott azonosítóhoz hozzáfűzzük a @duck.com szöveget.
// Írj egy emailCimetGeneral nevű függvényt, amely két paramétert vár: a teljes nevet és
// a születési évet, és visszatér a fenti szabályok alapján legenerált e-mail címmel! A
// születési évet ne legyen kötelező megadni, alapértéke legyen 1970! Hibakezeléssel
// nem kell foglalkoznod, feltesszük, hogy a paraméterek helyesek.
// Példa:
// Input: 'Richard Paul Astley', 1966
// Return: 'ricpauast6@duck.com'
// Input: 'Citad Ella'
// Return: 'citell0@duck.com'
// Input: 'Pablo Diego Jose Francisco de Paula Juan Nepomuceno Maria de los Remedios
// Cipriano de la Santisima Trinidad Ruiz y Picasso', 1881
// Return: 'pabdiejosfradepaujuanepmardelosremcipdelasantriruiypic1@duck.com'

function emailCimetGeneral(teljesNev, szulEv = 1970){
    nevLista = teljesNev.split(" ")
    let email = ""
    for (const nev of nevLista){
        email += nev.substr(0,3).toLowerCase()
    }
    email += szulEv.toString().substring(3)
    email += "@duck.com"
    return email
}

console.log(emailCimetGeneral("Pablo Diego Jose Francisco de Paula Juan Nepomuceno Maria de los Remedios Cipriano de la Santisima Trinidad Ruiz y Picasso", 1881))
console.log(emailCimetGeneral('Richard Paul Astley', 1966))
console.log(emailCimetGeneral('Citad Ella'))