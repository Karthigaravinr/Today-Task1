var input = document.getElementById("input")

function Add() {
    var para = document.createElement("p")
    para.innerHTML= input.value + "  <button class='Delete'>   Remove</button>"
    input.value = "";
    document.getElementById("list-add").appendChild(para);
} document.getElementById("Add").addEventListener("click", Add);

document.getElementById("list-add").addEventListener("click",function(event){
      if(event.target.classList.contains("Delete")){
       event.target.parentElement.remove();
      }
});
