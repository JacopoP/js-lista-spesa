const shopList=["frutta", "Pasta", "Tonno", "latte", "passata"];
const list=document.querySelector("ul");

let i=0;
while(i<shopList.length && shopList.length!=0){
    list.innerHTML+=`<li>${shopList[i]}</li>`
    i++
}

// for(let i=0; i<shopList.length; i++){
//     list.innerHTML+=`<li>${shopList[i]}</li>`
// }