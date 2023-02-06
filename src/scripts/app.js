let inputEl          = document.getElementById("input-el")
let convertBtn       = document.getElementById("convert-btn")
let solutionEl       = document.querySelectorAll(".solution-el")

 convertBtn.addEventListener("click", function(){
   let inputValue       = inputEl.value
   const feets          = (inputValue * 3.281).toFixed(2)
   const meters         = (inputValue / 3.281).toFixed(2)
   const gallons        = (inputValue * 0.264).toFixed(2)
   const liters         = (inputValue / 0.264).toFixed(2)
   const pounds         = (inputValue * 2.204).toFixed(2)
   const kilograms      = (inputValue / 2.204).toFixed(2)

      solutionEl[0].innerHTML = `
      ${inputValue} meters      = ${feets} feet | 
      ${inputValue} feet        = ${meters} meters          
      `
      solutionEl[1].innerHTML = `
      ${inputValue} liters      = ${gallons} gallons | 
      ${inputValue} gallons     = ${liters} liters          
      `
      solutionEl[2].innerHTML = `
      ${inputValue} kilos       = ${pounds} pounds | 
      ${inputValue} pounds      = ${kilograms} kilos          
      `
   })