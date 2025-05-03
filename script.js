const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===""){
        alert("You must write message!!!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        // <!we create span beacuse in teext right there will cross sign it will remove the text !>
        span.innerHTML="\u00d7";
        li.appendChild(span);
    
    } 
    inputBox="";
    saveData();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
// FOR REFRESH IT WAS DISAPPEAR SO MAKE IT SAVED WE MAKKE A FUNCTION
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//displaying the data when ever we open the browser..

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();