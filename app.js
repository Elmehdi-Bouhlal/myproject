var btn = document.getElementById("btn");
var h2 = document.getElementById("h2");
var txt = document.getElementById("txt");
var p = document.getElementById("p")
btn.addEventListener("click",function(){
    var val = txt.value ;
    p.append(val);
    h2.style.color="red";
    alert("hello");
})
