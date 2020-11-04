/* 
Erstellen Sie ein Formular zur Pizzabestellung
Die Größe darf angegeben werden durch checkboxen
eine oder zwei checkboxen dürfen selektiert werden
durch die Summe von den Indizes von der Pizzagröße kann man ermitteln, 
welche eine oder welche zwei Größen bestellt wurden 

durch den Click auf einen Button wird die Bestellung abgenommen.

Entweder in die Konsole oder in HTML wird angezeigt, was bestellt wurde
*/
enum Pizzagrößen {klein=10, mittel=100, groß=1000, extraGroß=10000}
type pGrößen = 'klein' | 'mittel' | 'groß' | 'extraGroß'
let summe:number = 0
function checkOrder(){
    
    let checkboxes = document.getElementsByName('size') //NodeList
    console.log('checkboxes :>> ', checkboxes);
    let checkboxesArray = [].slice.call(checkboxes)
    for (const checkbox of checkboxesArray) {
        if((<HTMLInputElement>checkbox).checked === true)
        {
            console.log('checked ');
            console.log('checkbox.value :>> ', (<HTMLInputElement>checkbox).value)
            summe += Pizzagrößen[(<HTMLInputElement>checkbox).value as pGrößen]
            console.log('summe :>> ', summe);
        }
    }
}