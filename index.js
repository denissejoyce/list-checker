textValue = '';

for(let i=0; i<document.querySelectorAll("textarea").length; i++){
    document.querySelectorAll("textarea")[i].addEventListener("click", function(){
        for(let j=0; j<=1; j++){
            document.querySelectorAll("textarea")[j].innerText = textValue;
            document.querySelectorAll("textarea")[j].classList.remove("defaultTxt");
        }
    })
}

function checkValues(){
    const FIRSTLIST = document.getElementById("firstList").value;
    const SECONDLIST = document.getElementById("secondList").value;

    if( FIRSTLIST=="" || SECONDLIST=="" ){
        // document.querySelector("textarea.txtarea").classList.add("emptyTextArea");
        alert("Please make sure to input the values.");
        if(FIRSTLIST=="" && SECONDLIST==""){
            for(let i=0; i<=1; i++){
                document.querySelectorAll("textarea.txtarea")[i].classList.add("emptyTextArea");
            }   
        } else if(FIRSTLIST=="") {
            document.querySelectorAll("textarea.txtarea")[0].classList.add("emptyTextArea");
        } else {
            document.querySelectorAll("textarea.txtarea")[1].classList.add("emptyTextArea");
        }
    } else {
        evaluateValues(FIRSTLIST, SECONDLIST);
    }
}

function evaluateValues(FIRSTLIST, SECONDLIST){
    let firstArr = [];
    let secondArr = [];
    let commonArr = [];

    firstArr = getArrValues(FIRSTLIST);
    secondArr = getArrValues(SECONDLIST);

    if(firstArr<secondArr){
        for(let i=0; i<firstArr.length; i++){
            if(secondArr.includes(firstArr[i])){
                commonArr.push(firstArr[i]);
            }
        }

    } else {
        for(let i=0; i<secondArr.length; i++){
            if(firstArr.includes(secondArr[i])){
                commonArr.push(secondArr[i]);
            }
        }
    }

    let refinedArr = [...new Set(commonArr)];

    (commonArr=="") ?  document.querySelector("h2").innerText = `No similar item/s in lists` 
        : (commonArr.length==firstArr.length && commonArr.length==secondArr.length) ? document.querySelector("h2").innerText = `Identical list`
        : document.querySelector("h2").innerText = `Common Items: ${refinedArr}`
    document.querySelector("h2").classList.remove("invisibleTxt");

}

function getArrValues(val){
    let arr = [];
    let x = 0;
    let y = 0;

    let editedVal = val.replaceAll(" ", "");
    for(let i=0; i<=editedVal.length; i++){
        if(editedVal[i]==","){
            y = i;
            arr.push(editedVal.substring(x,y));
            x = y+1;
        }
        if(i==editedVal.length){
            y = i;
            arr.push(editedVal.substring(x,y));
        }
    }

    return arr;
}
