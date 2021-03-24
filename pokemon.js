//baseURL = "https://pokeapi.co/api/v2/evolution-chain/";
//I think I can find all the info more easily from the species link below

baseURL = "https://pokeapi.co/api/v2/pokemon/";

//POPULATING ALL STARTER CARD INFO
//DIVs - Click These to Generate Evolution Cards
const starterOneBlock = document.getElementById("starterOneBlock");
const starterTwoBlock = document.getElementById("starterTwoBlock");
const starterThreeBlock = document.getElementById("starterThreeBlock");


/* starterOneBlock.style.visibility = "hidden";
starterTwoBlock.style.display = "none";
starterThreeBlock.style.display = "none"; */



//TITLES
const starterOneName = document.getElementById("starterOneName");
const starterTwoName = document.getElementById("starterTwoName");
const starterThreeName = document.getElementById("starterThreeName");
//PICTURES
const starterOnePic = document.getElementById("starterOnePic");
const starterTwoPic = document.getElementById("starterTwoPic");
const starterThreePic = document.getElementById("starterThreePic");
//POKEMON INFORMATION
const starterOneInfo = document.getElementById("starterOneInfo");
const starterTwoInfo = document.getElementById("starterTwoInfo");
const starterThreeInfo = document.getElementById("starterThreeInfo");

//GENERATION BUTTONS
const oneGenBtn = document.getElementById("genBtn1");
const twoGenBtn = document.getElementById("genBtn2");
const thrGenBtn = document.getElementById("genBtn3");
const fourGenBtn = document.getElementById("genBtn4");
const fivGenBtn = document.getElementById("genBtn5");
const sixGenBtn = document.getElementById("genBtn6");
const sevGenBtn = document.getElementById("genBtn7");
const eigGenBtn = document.getElementById("genBtn8");

//
let gen1 = [1,4,7];
let gen2 = [152,155,158];
let gen3 = [252,255,258];
let gen4 = [387,390,393];
let gen5 = [495,498,501];
let gen6 = [650,653,656];
let gen7 = [722,725,728];
let gen8 = [810,813, 816];

oneGenBtn.addEventListener("click", e => findStarters(gen1[0],gen1[1],gen1[2]));
twoGenBtn.addEventListener("click", e => findStarters(gen2[0],gen2[1],gen2[2]));
thrGenBtn.addEventListener("click", e => findStarters(gen3[0],gen3[1],gen3[2]));
fourGenBtn.addEventListener("click", e => findStarters(gen4[0],gen4[1],gen4[2]));
fivGenBtn.addEventListener("click", e => findStarters(gen5[0],gen5[1],gen5[2]));
sixGenBtn.addEventListener("click", e => findStarters(gen6[0],gen6[1],gen6[2]));
sevGenBtn.addEventListener("click", e => findStarters(gen7[0],gen7[1],gen7[2]));
eigGenBtn.addEventListener("click", e => findStarters(gen8[0],gen8[1],gen8[2]));


function findStarters(x,y,z) {
    fetch(baseURL + x + '/')
    .then(function(result1) {
        return result1.json()
    })
    .then(function(startInfo) {
        //console.log(startInfo)
        populateFirstStarter(startInfo);
    })
        function populateFirstStarter(link) {
            starterOneName.innerText = link.name;
            //starterOnePic.src = link.sprites.front_default;
            starterOnePic.src = link.sprites.other["official-artwork"].front_default;
            starterOneInfo.innerHTML = `This Pokemon is primarily a <b>${link.types[0].type.name}</b> type.`;
        }

    fetch(baseURL + y + '/')
    .then(function(result2) {
        return result2.json()
    })
    .then(function(startInfo) {
        //console.log(startInfo) - Pull up this Pokemon array in Console
        populateSecondStarter(startInfo);
    })
        function populateSecondStarter(link) {
            starterTwoName.innerText = link.name;
            //starterTwoPic.src = link.sprites.front_default;
            starterTwoPic.src = link.sprites.other["official-artwork"].front_default;
            starterTwoInfo.innerHTML = `This Pokemon is primarily a <b>${link.types[0].type.name}</b> type.`;
        }

    fetch(baseURL + z + '/')
    .then(function(result3) {
        return result3.json()
    })
    .then(function(startInfo) {
        console.log(startInfo)
        populateThirdStarter(startInfo);
    })
        function populateThirdStarter(link) {
            starterThreeName.innerText = link.name;
            //starterThreePic.src = link.sprites.front_default;  pixel art
            starterThreePic.src = link.sprites.other["official-artwork"].front_default;
            starterThreeInfo.innerHTML = `This Pokemon is primarily a <b>${link.types[0].type.name}</b> type.`;
        
            let cssLink = link.sprites.other["official-artwork"].front_default;
        }    
}