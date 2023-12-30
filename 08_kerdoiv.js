// 8)Kérdőív
// Az egyik egyetemen egy online kérdőívben kérdezik meg az informatikusokat, hogy
// melyik tantárgy számukra a legnehezebb. A kérdésre adott válaszokat elmentik, majd
// ebből készítenek statisztikát.
// Írj egy valaszokatOsszesit nevű függvényt, amely egy tantárgyak nevét (stringek)
// tároló tömböt kap paraméterül! A függvény térjen vissza egy object-tel, amelyben
// tárold el, hogy melyik tantárgyra hány szavazat érkezett! A property-k a tantárgyak
// nevei, a hozzájuk tartozó értékek pedig a rájuk érkezett szavazatok száma.
// A tantárgyak nevében a kis- és nagybetűket ne különböztesd meg (tehát pl. Kalkulus
// III és kalkulus iii ugyanaz a tárgy), az eredmény object-ben minden tárgy neve
// csupa kisbetűkkel szerepeljen!
// Példa:
// Input:
// [
// 'Indiszkret Matematika', 'Kalkulus III', 'Tavolito es valosagos szamitasok',
// 'kalkulus iii', 'tavolito es valosagos szamitasok',
// 'TAVOLITO ES VALOSAGOS SZAMITASOK', 'kalkulus iii', 'Kalkulus III',
// 'Indiszkret Matematika', 'tAvOlItO Es vAlOsAgOs sZaMiTaSoK',
// 'Kaveautomatak es informalis nyelvek', 'tavolito es valosagos szamitasok'
// ]
// Return: {'indiszkret matematika': 2, 'kalkulus iii': 4, 'tavolito es valosagos
// szamitasok': 5, 'kaveautomatak es informalis nyelvek': 1}

function valaszokatOsszesit(list){
    let subjects = {};
    for (const e of list){
        const sub = e.toLowerCase()
        const keys = Object.keys(subjects)
        const propName = sub;
        if (!keys.includes(sub)){
            subjects[propName] = 1;
        }
        else {
            subjects[propName] += 1;
        }
    }
    return subjects
}

const subjectList = ['Indiszkret Matematika', 'Kalkulus III', 'Tavolito es valosagos szamitasok', 
'kalkulus iii', 'tavolito es valosagos szamitasok', 
'TAVOLITO ES VALOSAGOS SZAMITASOK', 'kalkulus iii', 'Kalkulus III', 
'Indiszkret Matematika', 'tAvOlItO Es vAlOsAgOs sZaMiTaSoK', 
'Kaveautomatak es informalis nyelvek', 'tavolito es valosagos szamitasok']

const valaszok = valaszokatOsszesit(subjectList)

console.log(valaszok)
