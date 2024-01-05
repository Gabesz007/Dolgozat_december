// 3)Full stack
// Jónás, a csokigyáros el szeretné készíteni a vállalkozásának a weboldalát, ezért
// webfejlesztőket keres. A munkára beadott jelentkezések elbírálásakor Jónás
// előnyben részesíti azokat a fejlesztőket, akik a front-endhez és a back-endhez is
// értenek ("full stack fejlesztők").
// Írj egy fullStack nevű függvényt, amely két szöveget kap paraméterül: az első
// szövegben a front-end, míg a második szövegben a back-end fejlesztők nevei
// szerepelnek pontosvesszőkkel elválasztva! A függvény adja vissza egy tömbben
// azoknak a nevét, akik a front-end és back-end fejlesztők között is szerepelnek!
// Példa:
// Input: 'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab
// Antal;Koaxk Abel;Winch Eszter'
// Return: ['Koaxk Abel', 'Riz Otto']
// Input: 'Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'
// Return: []

function fullStack(frontEndText, backEndText){
    const frontEndArray = frontEndText.split(";");
    const backEndArray = backEndText.split(";"); 
    fullStackArray = []
    for (let e of frontEndArray){
        if (backEndArray.includes(e)){
            fullStackArray.push(e)
        }
    }
    return fullStackArray
}
console.log(fullStack('Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz Olga;Trab Antal;Koaxk Abel;Winch Eszter'))
console.log(fullStack('Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'))