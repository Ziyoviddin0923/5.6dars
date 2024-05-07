const button=document.querySelector("button");
const div =querySelector("div")
let toggle=true
button.addEventListener("click", ()=>{
if(toggle){
    div.classList.remove("hidden")
}else{
    div.classList.add("hidden")
}
button.textContent=toggle ? "Hide" : "Show"
toggle=!toggle
})