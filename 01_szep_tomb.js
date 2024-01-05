// 1)"Szép tömb"
// Egy tömböt akkor mondunk szépnek, ha csak azonos típusú elemeket tartalmaz. Írj
// egy szepTomb nevű függvényt, amely egy tömböt vár paraméterben, és visszaadja,
// hogy ez a tömb azonos típusú elemeket tárol-e! Ha a paraméterben kapott érték nem
// tömb típusú, akkor hamissal térjen vissza a függvény!
// Példa:
// Input: ['alma', 'korte', 'szilva', 'barack', 'palinka']
// Return: true
// Input: [10, 20, 30, 40, '50', 60, 70]
// Return: false
// Input: []
// Return: true
// Input: 'YEE HAW!'
// Return: false

function szepTomb(tomb){
    console.log(typeof tomb) 
    if (typeof tomb !== "object"){
        return false
    }
    let tipus = typeof tomb[0]
    for (let e of tomb){
        if (typeof e !== tipus){
        return false
        }    
    }
    return true
}
console.log(szepTomb([10, 20, 30, 40, '50', 60, 70]))
console.log(szepTomb('YEE HAW!'))
console.log(szepTomb(['alma', 'korte', 'szilva', 'barack', 'palinka']))
console.log(szepTomb([true, false, true]))