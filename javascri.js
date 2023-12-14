
function processing(){
   let valuemin =Math.floor(document.querySelector('#valuemin').value );
   let valuemax =Math.ceil(document.querySelector('#valuemax').value );
   let result = Math.floor(Math.random() * (valuemax - valuemin) + valuemin);

   let CollectValue=document.querySelector("#Collect_value");
   CollectValue.style.color = "#31FF4E";
   CollectValue.innerHTML=`O Número Sorteado foi ${result} Parabéns`




  //  regras de negocio.

   // se o primeiro input for maior que o 2 ou igual 
if(valuemin >= valuemax  ){
  document.querySelector('#valuemin').value ="";
  document.querySelector('#valuemax').value ="";
  CollectValue.innerHTML=`Não pode colocar valor maior no primeiro input ou igual!`
  CollectValue.style.color = "#f00c0c";
}
// valor max a receber aplicado no segundo input
if(valuemax > 100){
  CollectValue.style.color = "#f00c0c";
     CollectValue.innerHTML="max valor permitido e 100";
}

// se os inputs forem vazios
  if(valuemin=="" || valuemax==""){
    CollectValue.style.color = "#f00c0c";
    CollectValue.innerHTML=`Vazio!!!!`
  }
// se os inputs forem menor ou igual a zero
  if(valuemin <= 0){
    CollectValue.style.color = "#f00c0c";
    CollectValue.innerHTML=`Numero Negativos !!!!`
  }

// se os inputs forem menor ou igual a zero
if(valuemax <= 0){
    CollectValue.style.color = "#f00c0c";
    CollectValue.innerHTML=`Numero Negativos !!!!`
  }
}

document.querySelector('#valuemin').value ="";
document.querySelector('#valuemax').value ="";