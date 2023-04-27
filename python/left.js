document.write("<ul id='left'>");
var pythons = {"개인 관리 어플":"personal_manage","GUI 연습":"gui practice"};
for (var i in pythons){
    if (window.location.pathname.indexOf(pythons[i])>=0) {
        document.write("<li id='selected'><a href='./"+pythons[i]+".html'>"+i+"</a></li>");}
    else{document.write("<li><a href='./"+pythons[i]+".html'>"+i+"</a></li>");}
}
document.write("</ul>");
