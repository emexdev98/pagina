function appendValue(value){
    document.getElementById("result").value += value;

}
function calculate(){
    var result= eval(document.getElementById("result").value);
    document.getElementById("result").value=result;
}
function clearresult(){
    document.getElementById("result").value= "";
 }