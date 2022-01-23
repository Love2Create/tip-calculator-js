window.onload=function(){
    let mainContainer = document.getElementById("container");
    mainContainer.addEventListener("input", update);
}
function formatCurrencyValue(value){
    value = Math.ceil(value*100)/100;
    value = value.toFixed(2);
    return "$ " + value;
}

function formatSplit(value){
    if(value===1){
        return value+" person";
    }else{
        return value+" people";
    }
}

function update(){
   let bill = Number(document.querySelector("#billTotal").value);
   let tipPercent = Number(document.querySelector("#tipInput").value);
   let split = Number(document.querySelector("#splitInput").value);

   document.querySelector("#tipPercent").innerHTML = tipPercent +"%"; 
   document.querySelector("#tipValue").innerHTML = formatCurrencyValue(bill*(tipPercent/100));
   document.querySelector("#totalWithTip").innerHTML = formatCurrencyValue(bill+(bill*(tipPercent/100)));
   document.querySelector("#billEach").innerHTML = formatCurrencyValue(bill/split);
   document.querySelector("#tipEach").innerHTML = formatCurrencyValue((bill*(tipPercent/100))/split);
   document.querySelector("#splitValue").innerHTML = formatSplit(split);

}
