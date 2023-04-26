var tabs = ["python","java","java script"];
document.write("<div id='tabs'>")
var tabspath = '';
if (window.location.pathname != '/mycodeproject/') {tabspath+='.';}
tabspath += './';
for (var i=0;i<tabs.length;i++) {
    document.write("<a href='"+tabspath+tabs[i]+"/main.html'>"+tabs[i]+"</a>");
    if (i !== tabs.length-1) {document.write("  |  ")}
}
document.write("</div>")
document.querySelector("#tabs").style.backgroundColor = "rgb(49,49,49)";
document.querySelector("#tabs").style.textAlign = "center";
document.querySelector("#tabs").style.fontSize = "25px";
document.querySelector("#tabs").style.padding = "10px";
var tabelements = document.querySelectorAll("#tabs a");
for (var i =0; i<tabelements.length;i++) {
    tabelements[i].style.color = "gray";
    tabelements[i].style.textDecorationLine = "none";
    tabelements[i].addEventListener("mouseenter", function(event) {event.target.style.color = "white";});
    tabelements[i].addEventListener("mouseleave", function(event) {event.target.style.color = "gray";});
}
