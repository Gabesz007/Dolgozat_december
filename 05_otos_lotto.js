// 5)Ötöslottó
// A játék során 90 számból húznak ki 5 darab számot véletlenszerűen, és ezek közül
// kell a játékosoknak minél többet eltalálniuk. Erzsi néni ezen a héten a véletlenre
// bízza az öt szám bejelölését a lottószelvényen.
// Írj egy paraméter nélküli otoslotto függvényt, amely generál 5 darab véletlenszámot
// 1 és 90 között, és visszaadja ezeket egy tömbben, növekvő sorrendben! Ügyelj
// arra, hogy a számok között ne legyen ismétlődés (minden számot csak egyszer
// jelölhetünk meg)!

function otoslotto(){
    const min = 1;
    const max = 90;
    const szamDB = 5;
    let sorsoltSzamok = [];

    while (sorsoltSzamok.length < szamDB){
        const randomSzam = Math.floor(Math.random() * (max - min + 1) + min )
        if (!sorsoltSzamok.includes(randomSzam)){
            sorsoltSzamok.push(randomSzam)
        }
    }
    return rendez(sorsoltSzamok)
}

function minSzam(szamLista){
    let minSzam = szamLista[0];
    for (const e of szamLista){
        if (e < minSzam){
            minSzam = e
        }    
    }
    return minSzam
}

function maxSzam(szamLista){
    let maxSzam = szamLista[0];
    for (const e of szamLista){
        if (e > maxSzam){
            maxSzam = e
        }    
    }
    return maxSzam
}

function rendez(szamLista){
    rendezettLista = []
    while (szamLista.length > 0) {
        const minimumSzam = minSzam(szamLista)
        rendezettLista.push(minSzam(szamLista))
        const index = szamLista.indexOf(minimumSzam)
        szamLista.splice(index, 1)
    }
    return rendezettLista
}

const szamok = otoslotto()
console.log(minSzam(szamok))
console.log(maxSzam(szamok))
console.log(otoslotto())
