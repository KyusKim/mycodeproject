var tabs = {"파이썬":"python","자바":"java","자바 스크립트":"java script","기타":"etc"};
document.write("<div id='tabs'>")
var j=0;
for (var i in tabs) {
    document.write("<a href='https://kyuskim.github.io/mycodeproject/"+tabs[i]+"/main.html'>"+i+"</a>");
    if (j !== tabs.length-1) {document.write("  |  ");}
    j++;
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
