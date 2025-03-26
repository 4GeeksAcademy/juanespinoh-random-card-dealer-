import "bootstrap";
import "./style.css";
// ♦ ♥ ♠ ♣

const numbersArray=[1,2,3,4,5,6,7,8,9,10,11,12]
const suitsArray=[
  {icon:"♠",color:"black",class:"spade"},
  {icon:"♦",color:"red",class:"diamond"},
  {icon:"♥",color:"red",class:"heart"},
  {icon:"♣",color:"black",class:"club"},
]

// DOM
let card=document.querySelector(".card")
// 2 contenedres suit
let suit=document.querySelectorAll(".suit") 
let number=document.querySelector(".number")
let button=document.querySelector("#button")

// funcion para sacar un elemnto random de un array
function randomArrayItem(arr){
  
  return arr[Math.floor(Math.random() *arr.length)]
}

// funcion para agregar elemnts al dom 
  function randomCard(numbersArray,suits){
    let randomNumberItem=randomArrayItem(numbersArray)
    let randomSuitsItem=randomArrayItem(suits)
    
    number.style.fontSize="150px"
    number.innerHTML=randomNumberItem
    
    suit.forEach((elem)=>{
      elem.style.color=randomSuitsItem.color
      elem.style.fontSize="75px"
      elem.innerHTML=randomSuitsItem.icon
    })
    
  
}

l


button.addEventListener("click",()=>randomCard(numbersArray,suitsArray))

window.onload = function() {
  //write your code here
  randomCard(numbersArray,suitsArray)
  // set interval cada 10 seg
//   setInterval(()=>randomCard(numbersArray,suitsArray)
// , 10000);


};

