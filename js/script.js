const shopList=["frutta", "Pasta", "Tonno", "latte", "passata"];
const list=document.querySelector("ul");
const ok=document.getElementById("confirm");
const nItem=document.getElementById("new-item");
const remove=document.getElementById("remove");
const oItem=document.getElementById("old-item");


// ciclo while
let i=0;
while(i<shopList.length && shopList.length!=0){
    list.innerHTML+=`<li>${shopList[i]}</li>`
    i++
}

// for(let i=0; i<shopList.length; i++){
//     list.innerHTML+=`<li>${shopList[i]}</li>`
// }

ok.addEventListener("click",
    function(){
        const newItem=nItem.value;
        nItem.value="";
        if(newItem!=""){
            shopList.push(newItem);
            list.innerHTML+=`<li>${newItem}</li>`
        }
    }
);

remove.addEventListener("click",
    function(){
        const oldItem=oItem.value;
        oItem.value="";
        if(oldItem!=""){
            const index = shopList.indexOf(oldItem);
            if (index > -1) {
                shopList.splice(index, 1);
            }
            list.innerHTML="";
            // ciclo for
            for(let i=0; i<shopList.length; i++){
                list.innerHTML+=`<li>${shopList[i]}</li>`
            }
        }
    }
);