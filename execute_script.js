/// execute_script.js
document.addEventListener("keydown", function(){
  if (event.ctrlKey && event.which === 192)
  {
    alert("are you sure");
    eval(prompt("js to execute:"));
  }
});
