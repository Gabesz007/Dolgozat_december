// 7)Számok csoportosítása
// Írj egy szamokatCsoportosit nevű függvényt, amely egy olyan szöveget kap
// paraméterül, amelyben pontosvesszőkkel elválasztott számok szerepelnek! A
// függvény csoportosítsa a szövegben szereplő számokat "pozitív", "nulla" és "negatív"
// kategóriába! A csoportosítás eredményét egy object-ben kell visszaadni, a példában
// látható formátumban.
// Példa:
// Input: '7;-4;-1;0;2;5;-8'
// Return: {pozitiv: [7, 2, 5], nulla: [0], negativ: [-4, -1, -8]}
// Input: '-1;-2;-3;-4;-5'
// Return: {pozitiv: [], nulla: [], negativ: [-1, -2, -3, -4, -5]}

function szamokatCsoportosit(szamok){
    szamLista = szamok.split(";")
    const szamObjects = {
        "pozitiv": [],
        "nulla": [],
        "negativ": []
    }
    for (const e of szamLista){
        const szam = Number(e)
        if (szam > 0){
            szamObjects.pozitiv.push(szam)   
        }
        else if (szam < 0){ 
        szamObjects.negativ.push(szam)
        }
        else {
        szamObjects.nulla.push(szam)
        }
    }
    return szamObjects
}

console.log(szamokatCsoportosit('7;-4;-1;0;2;5;-8'))
console.log(szamokatCsoportosit('-1;-2;-3;-4;-5'))