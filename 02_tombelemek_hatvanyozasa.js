// 2)Tömbelemek hatványozása
// Írj egy hatvanyoz nevű függvényt, amely két paramétert vár: egy számokat tároló
// tömböt és egy számot! A függvény emelje a tömbben lévő számokat a második
// paraméterben kapott szám által meghatározott hatványukra, majd térjen vissza a
// hatványozás után kapott tömbbel!
// Ha valamelyik paraméter típusa nem megfelelő, akkor a függvény egy üres tömbbel
// térjen vissza!
// Példa:
// Input: [1, 4, 7, 2, 5], 3
// Return: [1, 64, 343, 8, 125]
// Input: 'buvarszivattyu', 5
// Return: []

    

function hatvanyoz(alapTomb, hatvanyKitevo){
    let hatvanyTomb = []
    for (let e of alapTomb){
        if (typeof e !== "number"){
            return []
        }  
        let hatvany = Math.pow(e, hatvanyKitevo)
        hatvanyTomb.push(hatvany)       
    }
    return hatvanyTomb
}
const hatvanyok = hatvanyoz([1, 4, 7, 2, "alma"], 3)
console.log(hatvanyok)