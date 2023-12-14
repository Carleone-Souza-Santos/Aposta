
function processing(){
   let valuemin =Math.floor(document.querySelector('#valuemin').value );
   let valuemax =Math.ceil(document.querySelector('#valuemax').value );
   let result = Math.floor(Math.random() * (valuemax - valuemin) + valuemin);

   let CollectValue=document.querySelector("#Collect_value");
   CollectValue.style.color = "#31FF4E";
   CollectValue.innerHTML=`O Número Sorteado foi ${result} Parabéns`

if(valuemin > valuemax || valuemin == valuemax ){
  document.querySelector('#valuemin').value ="";
  document.querySelector('#valuemax').value ="";
  CollectValue.innerHTML=`Não pode colocar valor maior no primeiro preenchimento ou igual!`
  CollectValue.style.color = "#f00c0c";
}
if(valuemax > 100){
  CollectValue.style.color = "#f00c0c";
     CollectValue.innerHTML="max valor permitido e 100";
}
  if(valuemin=="" || valuemax==""){
    CollectValue.style.color = "#f00c0c";
    CollectValue.innerHTML=`Vazio!!!!`
  }
  let zer =0;
  if(valuemin < zer){
    CollectValue.style.color = "#f00c0c";
    CollectValue.innerHTML=`Numero Negativos !!!!`
  }
if(valuemax < zer){
    CollectValue.style.color = "#f00c0c";
    CollectValue.innerHTML=`Numero Negativos !!!!`
  }
}

document.querySelector('#valuemin').value ="";
document.querySelector('#valuemax').value ="";