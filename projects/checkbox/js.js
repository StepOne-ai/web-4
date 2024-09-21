btnElement = document.querySelector(".btn"); 
resultElement = document.querySelector(".result"); 
checkboxButtons = document.querySelectorAll('[name="sweets"]'); 

btnElement.addEventListener("click", function(){  
    let Total = 0;                 
    for (const checkboxButton of checkboxButtons){      
        if(checkboxButton.checked){                  
            Total += parseInt(checkboxButton.value);
        }
    }
    resultElement.textContent = `${Total} руб`;
});