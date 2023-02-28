//declaracion de variables
let icons=Array.from(document.getElementsByClassName('icon'));
console.log(icons)
const arrayCopy=[];
let flagActive=false;
icons.forEach((icon,i)=>{
    icon.addEventListener('click',()=>{
        showArticle(icon.alt)
})})

const hideArticle=(array)=>{
array.forEach(element=>{
    document.getElementById(element.alt).style.display= 'none'
})

}
const showArticle =(id)=>{
document.getElementById(id).style.display= 'block'
let prueba=icons.filter(element=>element.alt!==id)
hideArticle(prueba)
}
