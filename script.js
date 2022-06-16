const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const label = document.getElementById("myLabel");


let counter = 0;
label.style.color = "yellow";

decrease.addEventListener("click", function(){
  counter -= 1;
  label.textContent = counter;
  
  if(counter < 0){
    label.style.color = "red";
  }
  else if (counter > 0){
    label.style.color = "blue";
  }
  else {
    label.style.color = "yellow";
  }
})

increase.addEventListener("click", function(){
  counter += 1;
  label.textContent = counter;
  
  if(counter < 0){
    label.style.color = "red";
  }
  else if (counter > 0){
    label.style.color = "blue";
  }
  else {
    label.style.color = "yellow";
  }
})

reset.addEventListener("click", function(){
  counter = 0;
  label.textContent = counter;
  
  if(counter < 0){
    label.style.color = "red";
  }
  else if (counter > 0){
    label.style.color = "blue";
  }
  else {
    label.style.color = "yellow";
  }
})



