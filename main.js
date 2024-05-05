const inputBox = document.getElementById("input-button");
const list = document.getElementById("List-container");

function addList(){
    if(inputBox.value === ''){
        alert ("you must enter some text");
    }
    else {
     let li = document.createElement("li");
     li.innerHTML = inputBox.value;
     list.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML="\u00d7";
     li.appendChild(span);
    }
    inputBox.value ="";
    

}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    },false);



   let x = 0;
   console.log("x"); 
