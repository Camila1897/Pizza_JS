const ing = ["salsa de tomate", "orégano", "mozzarella", "guindilla", "salami", "anchoas", "alcaparras"];
const shop = "Vamos al supermercado a comprar la masa";
const ope = "Abrimos el envoltorio de la masa";
const stretch = "Estiramos la masa";
const added = "Añadimos";
const toPutPizzaOven= "Metemos la pizza en el horno durante 20 minutos";
const out ="Sacamos la pizza del horno";
const donePizza = "¡Pizza lista!";

function buy() {
    console.log(shop+". ");                
}    

function preheat() {
    console.log ("precalentamos el horno a 180º C.");
}

function preparation() {
    console.log(ope +", " + stretch + " y "+added+" los ingredientes:");
} 

function ingredients() {
    console.log(ing[0]+", "+ing[1]+", "+ing[2]+", "+ing[3]+", "+ing[4]+", "+ing[5]+", "+"y "+ing[6]+".");
}

function cook() {
    console.log(toPutPizzaOven+" y esperamos hambrientos a que se haga.");
}

function outPizza() {
    console.log("Con cuidado a quemarnos, "+out+" y lo apagamos.");
}

function eat() {    
    console.log(donePizza);
}

function cut() {
    let portions = "6 porciones";
    console.log("Cortamos la pizza en "+portions+"...");
    console.log("Bon apetit!!");
}

function app() {
    buy();   
    preheat();
    preparation();
    ingredients();   
    cook();
    outPizza();
    eat();
    cut();
}

app();




