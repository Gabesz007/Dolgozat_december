// 4)Valaki éppen gépel...
// Jani egy chatalkalmazást fejleszt JavaScriptben. A chatben mindig kiírunk egy
// üzenetet arról, ha egy vagy több felhasználó éppen gépel. Írj egy gepeles nevű
// függvényt, amely egy szöveget kap paraméterül! Ez a szöveg pontosvesszőkkel
// elválasztva tartalmazza az éppen gépelő felhasználóknak a nevét. Figyelj arra, hogy
// néhány név elé és/vagy után néhány fölösleges whitespace karakter került, amiket
// először el kell távolítani!
// • Amennyiben a paraméter típusa nem megfelelő vagy a paraméterben az üres
// string érkezik, akkor a függvény térjen vissza a HIBA! szöveggel!
// • Ha pontosan 1 ember gépel, akkor térjünk vissza a {username} eppen
// gepel... szöveggel, ahol {username} a gépelő felhasználó neve!
// • Ha pontosan 2 ember gépel, akkor térjünk vissza a {username1} es {username2}
// eppen gepel... szöveggel, ahol {username1} az első, míg {username2} a második
// felhasználó neve a pontosvesszőkkel elválasztott adatok közül!
// • Ha 2-nél több ember gépel, akkor térjünk vissza a {username1}, {username2} es
// {N} tovabbi felhasznalo eppen gepel... szöveggel,
// ahol {username1} és {username2} ugyanaz, mint az előző
// vázlatpontban, {N} pedig a többi gépelő felhasználónak a száma!
// Példa:
// Input: 'SuTi'
// Return: 'SuTi eppen gepel...'
// Input: 'szte4k;catman6 ; Sziklas ; Aerosol;cservZenberg'
// Return: 'szte4k, catman6 es 3 tovabbi felhasznalo eppen gepel...'
// Input: ''
// Return: 'HIBA!'

function gepeles(szoveg){
    let trimmedArray = []
    if (szoveg.length == 0){
        return ("HIBA!")
    }
    let nevek = szoveg.split(";");
    for (let nev of nevek){
        trimmedArray.push(nev.trim())
    }
    let arrayLength = trimmedArray.length
    if (arrayLength == 1){
        return `${trimmedArray[0]} eppen gepel...`
    }
    if (arrayLength == 2){
        return `${trimmedArray[0]}, ${trimmedArray[1]} eppen gepel...`
    }
    let n = arrayLength - 2
    return `${trimmedArray[0]}, ${trimmedArray[1]} es ${n} tovabbi felhasznalo eppen gepel...`  

}
console.log(gepeles(''))
console.log(gepeles('SuTi'))
console.log(gepeles('maximUs, vakBela'))
console.log(gepeles('szte4k;catman6 ; Sziklas ; Aerosol;cservZenberg'))