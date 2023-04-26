document.write("<ul id='left'>");
var pythons = {"개인 웹페이지 만들기":"personal site"};
for (var i in pythons){
    document.write("<li><a href='./"+pythons[i]+".html'>"+i+"</a></li>");
}
document.write("</ul>");