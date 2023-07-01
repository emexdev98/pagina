function appendValue(value){
    document.getElementById("resulttop").value += value;

}

function calculate(){
    var result= eval(document.getElementById("resulttop").value);
    document.getElementById("resultdown").value=result;
}
function clearresult(){
    document.getElementById("resulttop").value= "";
    document.getElementById("resultdown").value="";
 }