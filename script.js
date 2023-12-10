

function calcbmi(){
    let weight = document.getElementById('weight').value ;
    let height = document.getElementById('height').value;

     const bmiTxt = document.getElementById('bmi');
     const bmiDesc = document.getElementById('desc');


  
   const heightMeter = height / 100;
   const bmi = weight / (heightMeter * heightMeter) ;

    bmiTxt.textContent =  bmi.toFixed(2);

  
    if  (bmi < 18.5){
        bmiDesc.innerHTML=`You are <strong>Underweight</strong>`;
        bmiTxt.style.color = "orange"
   
     }else if (bmi < 25) {
        bmiDesc.innerHTML=`You are <strong>Healthy</strong>`;
        bmiTxt.style.color = "green"

     }
    else if(bmi < 30) {
        bmiDesc.innerHTML=`You are <strong>Overweight</strong>`;
        bmiTxt.style.color = "lightcoral"

    }
    else if (bmi > 30){
        bmiDesc.innerHTML=`You are <strong>Obesity</strong>`;
        bmiTxt.style.color = "crimson"

    
}
}
    

    function reload(){
        window.location.reload()
      }
    