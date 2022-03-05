const para = document.getElementsByTagName('p');
para[1].innerText = "Hello Para";


for(let i=0; i<para.length; i++)
{
    para[i].style.color = "red";
}

const listitem = document.getElementsByClassName('single-item');
console.log(listitem[1]);

const lists = document.querySelector('ul#list');
console.log(lists.children);

