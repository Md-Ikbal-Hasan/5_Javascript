const colors = ['red' ,'yellow','green','blue','orange','purple','violet','indigo'];

const container = document.querySelector("section");
const h1 = document.querySelector("h1");
const selectedeColor = document.querySelector("#selectedeColor");

for(let color of colors){
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.style.backgroundColor = color;
    
    box.addEventListener('click' , function(){
        h1.innerText = "You have selected : ";
        selectedeColor.innerText = box.style.backgroundColor;
        selectedeColor.style.backgroundColor = box.style.backgroundColor;


    });

}
