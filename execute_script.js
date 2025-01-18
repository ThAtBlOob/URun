// execute_script.js
document.addEventListener("keyup", function(){
  if (event.ctrlKey && event.which === 192)
  { eval(prompt("js to execute:"));
  }
});
