
let goldMaker = 1;

let valorAtual_gold = 100;

let stoneMaker = 1;

let valorAtual_stone=50;

let woodMaker = 1;

let valorAtual_wood=55;

let foodMaker =1;

let valorAtual_food=100;



function get_maker_value(resource)
    {
        const maker = document.getElementById(resource);
        let maker_value = maker.querySelector('p');
        console.log(`vai virar parseInt : ${maker_value.textContent}`);
        console.log(`${typeof(maker_value.textContent)}`);
        return maker_value;
    }


    
function buyWoodProd() {
    console.log("entrou buyWoodProd");
    let value_stone = document.getElementById("value_stone");
    let value_wood = document.getElementById("value_wood");
    let value_woodProd = document.getElementById('value_wood_maker');

    //set price
    let price_WoodMaker = [
        //stone price
        parseInt(get_maker_value("wood_maker").textContent)*20 ,
        //wood price
        parseInt(get_maker_value("wood_maker").textContent)*10
        ];

    if(value_stone.textContent>=price_WoodMaker[0] && value_wood.textContent>=price_WoodMaker[1])
    {
        console.log("Tem recurso p comprar");
        value_stone.textContent = parseInt(value_stone.textContent - price_WoodMaker[0]);
        value_wood.textContent = parseInt(value_wood.textContent - price_WoodMaker[1]);
        value_woodProd.textContent = parseInt(value_woodProd.textContent) + 1;
    }
}

function buyStoneProd() {
    console.log("entrou buyStoneProd");
    let stone_value = document.getElementById("value_stone");
    let wood_value = document.getElementById("value_wood");
    let stoneProd_value = document.getElementById('value_stone_maker');

    //set price
    let price_StoneMaker = [
        //stone price
        parseInt(get_maker_value("stone_maker").textContent)*10 , 
        //wood price
        parseInt(get_maker_value("stone_maker").textContent)*20
    ];

    if(stone_value.textContent>=price_StoneMaker[0] && wood_value.textContent>=price_StoneMaker[1])
    {
        console.log("Tem recurso p comprar");
        stone_value.textContent = parseInt(stone_value.textContent - price_StoneMaker[0]);
        wood_value.textContent = parseInt(wood_value.textContent - price_StoneMaker[1]);
        stoneProd_value.textContent = parseInt(stoneProd_value.textContent) + 1;
    }
}


function buyFoodProd() {
const food = document.getElementById('food');
const food_value = food.querySelector('p');
let price_FoodMaker = ["Wood: ",parseInt(get_maker_value("wood_maker").textContent)*10 ,"Stone: ", parseInt(get_maker_value("stone_maker").textContent)*10];
let valorAtual_food = parseInt(food_value.textContent);
return price_FoodMaker, valorAtual_food;
}

function buyGoldProd() {
const gold = document.getElementById('gold');
const gold_value = gold.querySelector('p');
let price_goldMaker = 0;
let valorAtual_gold = parseInt(gold_value.textContent);
return price_goldMaker, valorAtual_gold;
}

//let makers_price = [price_WoodMaker,price_StoneMaker,price_FoodMaker,price_goldMaker];

// Chamar a função updateResources a cada segundo (1000 milissegundos)
setInterval(updateResources, 1000);

function updateValue(deltaTime, resource, resource_value) {
    // Atualize a variável com base no valor de deltaTime (tempo decorrido desde a última atualização)
    if (document.getElementById(`${resource}_maker`)) {
        let valorAdicional = null;
        let valorAtual = resource_value;
        const maker = document.getElementById(`${resource}_maker`);
        const maker_value = maker.querySelector('p').textContent;
        if (parseInt(maker_value) > 0) {
            valorAdicional = 1 * maker_value; // Valor X que será adicionado
        } else {
            valorAdicional = 0;
        }
        valorAtual += valorAdicional;
        return valorAtual;
    }
    return resource_value;
}

function takeResources(resource,quantity) {
    // Atualizar os valores dos recursos usando a função updateValue
    resource = resource - quantity;
    return resource;
}

function updateResources() {

    valorAntes_wood = parseInt(document.getElementById('value_wood').textContent);
    valorAntes_stone = parseInt(document.getElementById('value_stone').textContent);
    valorAntes_food = parseInt(document.getElementById('value_food').textContent);
    valorAntes_gold = parseInt(document.getElementById('value_gold').textContent);

    // Atualizar os valores dos recursos usando a função updateValue
    valorAtual_wood = updateValue(1, 'wood', valorAntes_wood);
    valorAtual_stone = updateValue(1, 'stone', valorAntes_stone);
    valorAtual_food = updateValue(1, 'food', valorAntes_food);
    valorAtual_gold = updateValue(1, 'gold', valorAntes_gold);

    let wood_value = document.getElementById('value_wood');
    let gold_value = document.getElementById('value_gold');
    let stone_value = document.getElementById('value_stone');
    let food_value = document.getElementById('value_food');

    // Atualizar os elementos HTML com os novos valores dos recursos
    wood_value.textContent = valorAtual_wood;
    stone_value.textContent = valorAtual_stone;
    food_value.textContent = valorAtual_food;
    gold_value.textContent = valorAtual_gold;
}

function showToolTip(id_button, id_toolTip, price){
    const tooltip = document.getElementById(`${id_toolTip}`);
    
    const button = document.getElementById(`${id_button}`);
    const rect = button.getBoundingClientRect();

    tooltip.style.display = "block";
    tooltip.innerHTML = `Price: ${price}`;
    
    
    tooltip.style.left = rect.left + rect.width / 2 + "px";
    tooltip.style.top = rect.top + "px";
}

function hideToolTip(id_button, id_toolTip)
{
    const tooltip = document.getElementById(`${id_toolTip}`);
    tooltip.style.display = "none";
}