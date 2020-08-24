var capital
let f=document.getElementById("options");
fetch('https://restcountries.eu/rest/v2/all').then((el)=>{
     return el.json();}).then((el)=>{
      el.forEach(a=>{
         let c=a.name;
         myOption = document.createElement("option");
         myOption.text = c;
         myOption.value = c;
         f.appendChild(myOption);
     })})

function myfunc () {
        let c=document.getElementById("options").value;
        fetch('https://restcountries.eu/rest/v2/all').then((el)=>{
             return el.json();}).then((el)=>{
                     el.forEach(a=>{
                          let d=a.name;
                          if (d==c){
                                     capital=a.capital;
                                 }
                     })
                     })


             }



document.getElementById("button").addEventListener("click",function()
{
   var val1=["full-name","email","age","bloodgroup"];
   if (document.getElementById("male").checked ===true){
  val1.push("male");
  }
  else {
    val1.push("female");
  }
val1.push("color");
val1.push("mes");
val1.push("options");
var tb1=document.getElementById("task");
var row1=tb1.insertRow();
var i=0;
val1.forEach((el,i)=>{
    var cel=row1.insertCell(i);
    var a=document.getElementById(val1[i]).value;
    let newText=document.createTextNode(a);
    cel.appendChild(newText);
     if (i!=4){
    document.getElementById(val1[i]).value="";
    }
    i++;
});
let newText=document.createTextNode(capital);
var cel=row1.insertCell(8);
cel.appendChild(newText);

alert("form submitted successfully");
})